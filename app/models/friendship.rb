# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ApplicationRecord

    validates :user, presence: true
    validates :friend, presence: true, uniqueness: { scope: :user }
    validate :not_self
    
    after_create :create_inverse_relationship
    after_destroy :destroy_inverse_relationship

    belongs_to :user
    belongs_to :friend, class_name: :User

    private

    def create_inverse_relationship
        Friendship.create(user_id: friend.id, friend_id: user.id ) unless friend.friends.include?(user)
    end

    def destroy_inverse_relationship
        friendship = friend.friendships.find_by(friend_id: user.id)
        friendship.destroy if friendship
    end

    def not_self
        errors[:friend] << "can't be user" if user == friend
    end
    
end
