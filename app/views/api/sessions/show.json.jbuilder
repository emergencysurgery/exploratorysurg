json.extract! @user, :id, :first_name, :last_name, :sex, :date_of_birth, :email, :work, :education, :about_me
json.profilePicture url_for(@user.profile_picture) if @user.profile_picture.attached?
json.coverPhoto url_for(@user.cover_photo) if @user.cover_photo.attached?
json.pendingFriendIds @user.pending_friend_ids
json.friendRequesterIds
json.friendIds @user.friend_ids