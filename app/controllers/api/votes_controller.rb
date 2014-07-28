class Api::VotesController < ApplicationController
  def create
    current_user.votes.create(vote_params)
    render nothing: true 
  end

  private

  def vote_params
    params.permit(:bookmark_id, :value)
  end
end