class MoviesController < ApplicationController
	def index
		@movie = Movie.new
		@movies = Movie.order('created_at DESC')
	end

	def new
		@movie = Movie.new

	end

	def create
		@movie = Movie.new(params[:movie])
		@explanation = Explanation.new


		if @movie.save
			redirect_to action: :show, id: @movie.id
		else
			render 'new'
		end
	end

	def avatar
		@avatar = Movie.find(params[:id])
	end

	def show
		@movie = Movie.find(params[:id])
		@explanation = Explanation.new
	end

	def admin
		authenticate
		@movies = Movie.all
	end

	def lasturl
		@explanation = Movie.all
		@lastexplanation = Explanation.all
	end

	def edit
		authenticate
		@movie = Movie.find(params[:id])
		@explanation = Explanation.new

		@lastexplanation = Explanation.all

	end

	def update
		@movie = Movie.find(params[:id])
		if @movie.update_attributes(params[:movie])
			redirect_to @movie
		else
			redirect_to edit_movie_path
		end
	end

	def destroy
		authenticate
		@movie = Movie.find(params[:id])
		@movie.destroy
		redirect_to admin_path
	end

	def authenticate
		authenticate_or_request_with_http_basic do |username, password|
			username == "pathways" && password == ""
		end
	end
end
