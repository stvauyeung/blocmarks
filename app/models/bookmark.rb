class Bookmark < ActiveRecord::Base
  validates_presence_of :title, :description, :link, on: :create
  has_and_belongs_to_many :categories
  belongs_to :user
  has_many :votes

  default_scope order: 'created_at DESC'

  def self.before_today
    self.where("created_at < ?", (Time.now - 1.day))
  end
end