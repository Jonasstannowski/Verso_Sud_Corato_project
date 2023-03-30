class Form < ApplicationRecord
  belongs_to :locations
  has_many :form_fields
end
