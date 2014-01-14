class User < ActiveRecord::Base
  attr_accessible :email, :name
  before_save { self.email = email.downcase }
  validates :name, presence: true, length: { maximum: 50 }
  VALIDATES_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, format: { with: VALIDATES_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
end
