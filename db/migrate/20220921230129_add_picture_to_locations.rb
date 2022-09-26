class AddPictureToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :picture, :string
  end
end
