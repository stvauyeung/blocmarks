class UserSerializer < ActiveModel::Serializer
  # This is where we specify which attributes we want to be rendered with a user object.
  attributes :id, :name, :email
end
