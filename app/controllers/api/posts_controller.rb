class Api::PostsController < ApplicationController

    before_action :require_login
    before_action :underscore_params!, only: :create


    def index 
        if params[:user] == "all"
            @posts = Post.includes(:likes, comments: [:likes] ).all
        else
            @posts = Post.includes(:likes, comments: [:likes] )
                .where('profile_id = ? OR author_id = ?', params[:user], current_user.id)    
        end
        render :index
    end

    def show
        @post = Post.with_attached_photo.includes(:comments).find_by(id: params[:id])
        if @post
            render :show
        else
            render json: ["Post not found"], status: 404
        end
    end

    def create
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        if @post.save 
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update 
        @post = Post.find_by(id: params[:id])
        
        if @post && @post.author_id == current_user.id && @post.update(change_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        if @post && @post.destroy
            render json: {}
        else 
            render json: ["Post not found"], status: 404
        end
    end

    private

    def post_params
        params.require(:post).permit(:body, :photo, :profile_id)
    end

    def change_params
        params.require(:post).permit(:body)
    end

end
