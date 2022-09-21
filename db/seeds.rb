# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Location.new

Location.create!(
  name: 'Oltre Il Velo',
  address: 'Piazza di Vagno, Corato',
  subject: '',
  text: Cloudinary::Utils.cloudinary_url("11218860_1688241844741308_5734398687113507631_n_akfk6y.jpg"),
  audio: Cloudinary::Utils.cloudinary_url("https://res.cloudinary.com/dq9oebltp/video/upload/v1663612005/1_o27rra.mp3", {resource_type: "video"}),
  video: Cloudinary::Utils.cloudinary_url("https://res.cloudinary.com/dq9oebltp/video/upload/v1663612240/Oltre%20Il%20Velo%20-%20Luis%20Gomez%20de%20Teran%20-%20-%20Piazza%20Di%20Vagno%20-%202015/Oltre%20Il%20Velo%20video%201.mp4", {resource_type: "video"}),
)

Location.create!(
  name: 'La reggine de Abbazia',
  address: 'Via Papagno 28, Corato',
  subject: '',
  text: Cloudinary::Utils.cloudinary_url("16107180_1641327562828867_5260579686812244877_o_bdsktl.jpg"),
  audio: Cloudinary::Utils.cloudinary_url("https://res.cloudinary.com/dq9oebltp/video/upload/v1663776515/1_ki7uwk.mp3", {resource_type: "video"})
)

Location.create!(
  name: 'Pieta',
  address: 'Via San Benedetto 66, Corato',
  subject: 'test',
  text: Cloudinary::Utils.cloudinary_url("16112686_1641349429493347_1771070760638713697_o_umfbeg.jpg"),
  audio: Cloudinary::Utils.cloudinary_url("https://res.cloudinary.com/dq9oebltp/video/upload/v1663776568/1_uoze8a.mp3", {resource_type: "video"})
)
