class AddSubjectToLocation < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :subject, :string
  end
end
