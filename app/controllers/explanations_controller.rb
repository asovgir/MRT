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
		set_current_movie
		@explanation = Explanation.new(params[:explanation])

		if @explanation.save
			redirect_to action: :show, id: @explanation.id
		else
			render 'new'
		end
	end

end
