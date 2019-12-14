class Api::UsersController < ApplicationController

    before_action :require_login, only: [:update, :index]
    before_action :underscore_params!, only: [:create, :update]

    def index
        @users = User.includes(:friend_requests, :friendships).all
        render :index
    end

    def create
        
        params[:user][:email] = params[:user][:email].downcase
    
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = current_user
        if @user && @user.update(change_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
        
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user
            render :show
        else
            render json: ["User not Found"], status: 404
        end
    end

    private 

    def user_params
        params.require(:user).permit(:work, :password, :education, :about_me, :first_name, :last_name, :sex, :email, :date_of_birth)
    end

    def change_params
        params.require(:user).permit(:work, :education, :location, :about_me, :profile_picture, :cover_photo)
    end


   
   
end
