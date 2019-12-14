json.users do
    @users.each do |user|
        json.set! user.id do
            json.partial! 'user', user: user
        end
    end
end
json.friendRequests do
    @users.each do |user|
        user.friend_requests.each do |request|
            json.set! request.id do
                json.partial! 'api/friend_requests/friend_request', friend_request: request
            end
        end
    end
end
json.friendships do
    @users.each do |user|
        user.friendships.each do |friendship|
            json.set! friendship.id do
                json.extract! friendship, :id, :user_id, :friend_id
            end
        end
    end
end
