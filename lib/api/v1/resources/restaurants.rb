require 'json'

module API::V1::Resources
  class Restaurants < Grape::API
    resource 'restaurants' do
      helpers do
        def restaurants
          @__restaurants ||= JSON.parse(File.read('data/restaurants.json'),
            symbolize_names: true)
        end

        def reviews
          @__reviews ||= JSON.parse(File.read('data/reviews.json'),
            symbolize_names: true)
        end
      end

      # GET /v1/restaurants
      params do
      end
      get do
        present restaurants, with: API::V1::Entities::Restaurant
      end

      namespace ':token' do
        get do
          rest = restaurants.select { |r| r[:token] == params[:token] }.first
          present rest, with: API::V1::Entities::Restaurant
        end # get

        namespace 'reviews' do
          # GET /v1/restaurants/:token/reviews
          get do
            review = reviews.select { |r| r[:restaurant_token] == params[:token] }
            present review, with: API::V1::Entities::Review
          end # get
        end # reviews
      end # :token
    end # restaurants
  end
end