json.extract! post, :id, :body, :author_id, :profile_id
json.photoUrl url_for(post.photo) if post.photo.attached?
