class AddVideoToLocation < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :video, :string
  end
end
