class Movie < ActiveRecord::Base
  attr_accessible :title, :description, :avatar
  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }
end
