class Movie < ActiveRecord::Base
  cattr_accessor :current
  attr_accessible :title, :description, :avatar
  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" },
  					:storage => :s3,
  					:s3_host_name => 'moviert.s3-website-us-east-1.amazonaws.com',
					 :bucket => 'moviert',
					 :aws_credentials => "#{Rails.root}/config/aws.yml"
  has_many :explanations
end
