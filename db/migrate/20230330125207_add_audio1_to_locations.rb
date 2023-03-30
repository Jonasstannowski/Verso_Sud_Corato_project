class AddAudio1ToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :audio1, :string
  end
end
