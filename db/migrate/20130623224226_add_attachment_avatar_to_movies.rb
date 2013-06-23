class AddAttachmentAvatarToMovies < ActiveRecord::Migration
  def self.up
    change_table :movies do |t|
      t.attachment :avatar
    end
  end

  def self.down
    drop_attached_file :movies, :avatar
  end
end
