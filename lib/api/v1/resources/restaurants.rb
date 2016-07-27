require 'json'

module API::V1::Resources
  class Restaurants < Grape::API
    resource 'restaurants' do
      helpers do
        def restaurants
          @__restaurants ||= JSON.parse(File.read('data/restaurants.json'),
            symbolize_names: true).each do |rest|

            stars = reviews_of(rest[:token]).map { |review| review[:stars] }

            rest[:num_reviews] = stars.count
            unless stars.empty?
              rest[:stars] = stars.reduce(&:+).to_f / stars.count
            else
              rest[:stars] = "Not reviewed yet"
            end
          end
        end

        def restaurants_with(filters = {})
          restaurants.select do |r|
            if filters[:price] && !filters[:price].empty?
              next unless filters[:price].include?(r[:price].to_s)
            end

            if filters[:open_now]
              hours_for_today = r[:operating_hours][Date.today.wday]
              start = hours_for_today[0] + ' PDT'
              stop = hours_for_today[1] + ' PDT'
              next unless start < filters[:open_now] && filters[:open_now] < stop
            end

            true
          end
        end

        def reviews
          @__reviews ||= JSON.parse(File.read('data/reviews.json'),
            symbolize_names: true)
        end

        def reviews_of(restaurant_token)
          reviews.select { |r| r[:restaurant_token] == restaurant_token }
        end
      end

      # GET /v1/restaurants
      params do
        optional :price,    type: String
        optional :open_now, type: String
      end
      get do
        filters = {}
        filters[:price] = params[:price].split(',') if params[:price]
        if params[:open_now]
          filters[:open_now] = DateTime.parse(params[:open_now])
        end


        present restaurants_with(filters), with: API::V1::Entities::Restaurant
      end

      namespace ':token' do
        # GET /v1/restaurants/:token
        get do
          rest = restaurants.select { |r| r[:token] == params[:token] }.first
          rest[:reviews] = reviews_of(rest[:token])
          present rest, with: API::V1::Entities::Restaurant
        end # get

        namespace 'reviews' do
          # GET /v1/restaurants/:token/reviews
          get do
            present reviews_of(params[:token]), with: API::V1::Entities::Review
          end # get
        end # reviews
      end # :token
    end # restaurants
  end
end