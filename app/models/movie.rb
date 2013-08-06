class Movie < ActiveRecord::Base
  cattr_accessor :current
  attr_accessible :title, :description, :avatar
  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }
  has_many :explanations
end
