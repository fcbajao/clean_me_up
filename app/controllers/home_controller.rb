class HomeController < ApplicationController
  def index
    @team_a = 100.times.map { User.new }
    @team_b = 100.times.map { User.new }
  end
end
