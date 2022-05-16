class Location < ApplicationRecord
  #add_column :subject
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
end
