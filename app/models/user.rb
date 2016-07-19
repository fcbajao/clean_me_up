class User
  include ActiveModel::Serialization

  attr_accessor :name, :bio

  def initialize
    self.name = Faker::Name.name
    self.bio = Faker::Lorem.paragraph(5)
  end
end
