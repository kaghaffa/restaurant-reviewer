module API::V1::Entities
  class Review < Grape::Entity
    expose :name
    expose :date
    expose :stars
    expose :comments
  end
end