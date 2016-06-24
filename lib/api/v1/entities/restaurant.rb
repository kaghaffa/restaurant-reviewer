module API::V1::Entities
  class Restaurant < Grape::Entity
    expose :token
    expose :name
    expose :photograph_url
    expose :address
    expose :operating_hours
  end
end