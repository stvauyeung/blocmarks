class Vote < ActiveRecord::Base
  belongs_to :user
  belongs_to :bookmark
  validates_uniqueness_of :bookmark, scope: :user
end