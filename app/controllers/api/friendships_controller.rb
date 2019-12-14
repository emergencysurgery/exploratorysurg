class Api::FriendshipsController < ApplicationController
    def destroy
        friendship = Friendship.find(params[:id])
        if friendship.destroy
            render json: {}
        else
            render friendship.errors.full_messages, status: 422
        end
    end
end
