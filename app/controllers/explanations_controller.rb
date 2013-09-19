class ExplanationsController < ApplicationController

	before_filter :set_current_movie

	def set_current_movie
		@current_movie = $movie
	end

	def show
		@explanation = Explanation.find(params[:id])
		@explanations = Explanation.order('created_at DESC')
	end

	def new
		@explanation = Explanation.new

	end

	def create
		@current_movie = $movie
		@explanation = Explanation.new(params[:explanation])

		if @explanation.save
			redirect_to :back
		else
			render 'new'
		end
	end

end
