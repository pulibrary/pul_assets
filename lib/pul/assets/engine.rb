require "pul/assets/version"

module Pul
  module Assets
    class Engine < ::Rails::Engine
      initializer :assets do |config|
        Rails.application.config.assets.precompile += %w{ library_full_logo.png }
        Rails.application.config.assets.precompile += %w{ library_full_logo.svg }
        Rails.application.config.assets.paths << root.join("app", "assets", "images")
      end
    end
  end
end
