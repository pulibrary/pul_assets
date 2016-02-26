# Princeton University Library - Assets

Gem of resuable PUL JS, Sass, graphics, etc. for Rails apps.

## Installation

Add this line to your application's Gemfile:
	
	gem 'pul-assets', :git => 'git@github.com:pulibrary/pul_assets.git', :branch => :master # pulls latest master branch of pul_assets repo

And then execute:

    bundle

Or install it yourself as:

    gem install pul-assets 

Dependencies to include in your Gemfile:

	gem 'modernizr-rails'
	gem 'normalize-rails'
	gem 'susy'
	gem 'breakpoint'
	gem 'bourbon'
	gem 'jquery-tablesorter'

## Usage

In your application.scss file, add:

    @import 'pul-assets';

In your application.js file, add:

	//= require jquery-tablesorter
	//= require jquery-tablesorter/jquery.tablesorter.combined
	//= require jquery-tablesorter/widgets/widget-uitheme
	//= require pul-assets

To render header and footer views partials, add where appropriate:

	<%= render 'pul-assets/header' %>
	<%= render 'pul-assets/footer' %>

To include the PU Library favicon, add to the application layout's head element: 

	<%= favicon_link_tag 'favicon.ico' %>

To invoke tablesorter plugin:

	/* In a js file, include the following to apply the plugin to all tables. 
	 * Change the selector to id of element to be more specific. 
	 * stickyHeaders widget makes the table header appear always on top
	 * filter widget allows search/filter of column contents
	 * zebra widget allows striping of rows
	 */
	$("table").tablesorter({
		widthFixed: true,
		widgets: ['stickyHeaders', 'filter', 'zebra'],	
	});

	<!-- In the view with table element, add the class "tablesorter" -->
	<table class="tablesorter">
