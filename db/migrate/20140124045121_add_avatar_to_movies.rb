class AddAvatarToMovies < ActiveRecord::Migration
  def change
  end

  def self.up
  	add_attachment :movies, :avatar
  end

  def self.down
  	remove_attachment :movies, :avatar
  end
end
