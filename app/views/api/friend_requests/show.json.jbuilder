json.friendRequest do
    json.partial! 'friend_request', friend_request: @friend_request
end
if @friendship
    if @friendship[0] 
        json.friendship do
            json.extract! @friendship[0], :id, :user_id, :friend_id
        end
    end
end

if @other_side 
    if @other_side[0]
        json.otherSide do
            json.extract! @other_side[0], :id, :user_id, :friend_id
        end
    end
end
