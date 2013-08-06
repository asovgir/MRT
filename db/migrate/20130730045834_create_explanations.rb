class CreateExplanations < ActiveRecord::Migration
  def change
    create_table :explanations do |t|
    	
		t.belongs_to :movie
    	t.string :synopsis
    	t.string :explanation

      t.timestamps
    end
  end
end
