class Explanation < ActiveRecord::Base
  attr_accessible :title, :body, :synopsis, :explanation
  belongs_to :movie
end
