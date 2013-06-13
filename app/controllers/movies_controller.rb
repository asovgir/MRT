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

		if @movie.save
			redirect_to action: :show, id: @movie.id
		else
			render 'new'
		end
	end

	def show
		@movie = Movie.find(params[:id])
	end
end
