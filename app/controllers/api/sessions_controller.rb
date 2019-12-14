class Api::SessionsController < ApplicationController


    def create
        @user = User.find_by_credentials(
            params[:user][:email].downcase,
            params[:user][:password]
        )
        if @user
            login(@user)
            render :show
        else
            render json: ["Invalid Username or Password"], status: 404
        end
    end

    def destroy
        if current_user
            logout
            render json: {}
        else
            render json: ["You must be logged in"], status: 404
        end
    end
end
