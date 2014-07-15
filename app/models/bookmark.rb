class Bookmark < ActiveRecord::Base
  validates_presence_of :title, :description, :link, on: :create
  belongs_to :user

  default_scope order: 'created_at DESC'

  def self.before_today
    self.where("created_at < ?", (Time.now - 1.day))
  end
end