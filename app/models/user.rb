class User < ActiveRecord::Base
  has_secure_password
  validates_presence_of :name, :email, on: :create
  has_many :bookmarks
  has_many :votes
end