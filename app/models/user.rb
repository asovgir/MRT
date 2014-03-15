class User < ActiveRecord::Base
  validates :name, presence: true
  validates :email, presence: true
  attr_accessible :email, :name
end
