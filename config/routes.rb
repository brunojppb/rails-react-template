Rails.application.routes.draw do
  
	root to: 'home#index'
	get '/api/users', to: 'home#get_users'

end
