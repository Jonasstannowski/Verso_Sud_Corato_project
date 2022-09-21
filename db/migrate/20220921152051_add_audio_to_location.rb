class AddAudioToLocation < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :audio, :string
  end
end
