class AddTextToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :text, :string
  end
end
