# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

x = 0

10.times do
  x += 1
  user = User.create(
    name: Faker::BackToTheFuture.character,
    image: Faker::Avatar.image,
    email: "test#{x}@test.com",
    password: 'asdfasdf'
    )
    5.times do
      Post.create(
        title: Faker::BackToTheFuture.date,
        body: Faker::BackToTheFuture.quote,
        user_id: user.id
      )
    end
end