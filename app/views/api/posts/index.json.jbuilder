json.posts do 
    @posts.each do |post|
        json.set! post.id do 
            json.partial! 'post', post: post
            json.commentIds post.comment_ids
            json.likeIds post.like_ids
        end
    end
end
json.comments do
    @posts.each do |post|
        post.comments.each do |comment|
            json.set! comment.id do
                json.partial! 'api/comments/comment', comment: comment
            end
        end
    end
end
json.likes do
    @posts.each do |post| 
        post.likes.each do |like|
            json.set! like.id do
                json.partial! 'api/likes/like', like: like
            end
        end
        post.comments.each do |comment|
            comment.likes.each do |like|
                json.set! like.id do 
                    json.partial! 'api/likes/like', like: like
                end
            end
        end
    end
end
