class CreatePodcasts < ActiveRecord::Migration[6.0]
  def change
    create_table :podcasts do |t|
      t.string :title, null: false
      t.text   :summary, null: false
      t.timestamps
    end
  end
end
