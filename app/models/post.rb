# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  body       :string
#  author_id  :integer          not null
#  profile_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord

    validate :ensure_photo_or_body

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :profile,
        foreign_key: :profile_id,
        class_name: :User

    has_many :comments, dependent: :destroy

    has_one_attached :photo

    has_many :likes, as: :likeable, dependent: :destroy

    def ensure_photo_or_body
        unless self.photo.attached? || self.body.length > 0
            errors[:post] << "Please Add a Photo or a Status"
        end
    end


end
