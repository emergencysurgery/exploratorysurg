# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  post_id    :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
    validates :body, :author_id, :post_id, presence: true

    belongs_to :post

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_many :likes, as: :likeable, dependent: :destroy

end
