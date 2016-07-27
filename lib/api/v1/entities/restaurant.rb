module API::V1::Entities
  class Restaurant < Grape::Entity
    expose :token
    expose :name
    expose :photograph_url
    expose :address
    expose :hours do |r, _|
      r[:operating_hours]
    end
    expose :price
    expose :stars
    expose :num_reviews
    expose :reviews, if: proc { |r, _| !!r[:reviews] }
  end
end