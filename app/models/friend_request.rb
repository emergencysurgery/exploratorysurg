# == Schema Information
#
# Table name: friend_requests
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class FriendRequest < ApplicationRecord

  validates :user, presence: true
  validates :friend, presence: true, uniqueness: { scope: :user }
  validate :not_self
  validate :not_friends
  validate :not_pending

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :friend,
    foreign_key: :friend_id,  
    class_name: :User

  def accept
    friend.friends << user
    destroy
  end

  private

  def not_self
        errors[:friend] << "can't be user" if user == friend
  end

  def not_friends
    errors[:friend] << "is already added" if user.friends.include?(friend)
  end
  
  def not_pending
    errors[:friend] << "already requested friendship" if friend.pending_friends.include?(user)
  end
end
