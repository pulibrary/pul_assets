# Princeton University Library - Assets

Gem of resuable PUL JS, Sass, graphics, etc. for Rails apps.

## Installation

Add this line to your application's Gemfile:

	gem 'pul-assets' # pulls latest build from Rubygems

or to pull latest master branch of pul_assets repo:
	
	gem 'pul-assets', :git => 'git@github.com:pulibrary/pul_assets.git', :branch => :master # pulls latest master branch of pul_assets repo

And then execute:

    bundle

Or install it yourself as:

    gem install pul-assets 

Dependencies to include in your Gemfile:

	gem 'normalize-rails'
	gem 'susy'
	gem 'breakpoint'
	gem 'bourbon'
	gem 'jquery-tablesorter'

## Usage

In your application.scss file, add:

    @import 'pul-assets';

To render header and footer views partials, add where appropriate:

	<%= render 'pul-assets/header' %>
	<%= render 'pul-assets/footer' %>

## Development

1. Update version number in `/lib/pul/assets/version.rb`
2. Make sure repo has latest codebase
3. run `rake build` and `rake release` to update gem in Rubygems
