class Podcast < ApplicationRecord
    has_many_attached :files
end
