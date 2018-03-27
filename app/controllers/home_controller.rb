class HomeController < ApplicationController

	def index
	end

	def get_users
		users = {
			users: [
				{id: 1, name: 'bruno paulino'},
				{id: 2, name: 'Bruce Wayne'},
				{id: 3, name: 'Tony Stark'}
			]
		}
		sleep(1)
		render json: users, status: :ok
	end

end
