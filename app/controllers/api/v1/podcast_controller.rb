class Api::V1::PodcastController < ApplicationController
  def index
  end

  def create
    @podcast = Podcast.new(podcast_params)
    if @podcast.save
      render json: @podcast, status: :created
    else
      render json: @podcast.errors, status: :unprocessable_entity
    end
  end

  def show
  end

  def update
  end

  def destroy
  end
  
  private 

  def podcast_params
    params.require(:podcast).permit(:title, :summary)
  end
end
