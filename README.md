# Princeton University Library - Assets

Gem of resuable PUL JS, Sass, graphics, etc. for Rails apps.

## Installation

Add this line to your application's Gemfile:

	gem 'pul-assets', github: 'pulibrary/pul_assets', branch: :main # pulls latest main branch of pul_assets repo

And then execute:

    bundle

Or install it yourself as:

    gem install pul-assets

## Usage

In your application.html.erb file, add `<%= javascript_include_tag :modernizr %>`:

	<html>
	<head>
	  <title>Your Awesome App</title>
	  <%= stylesheet_link_tag    :application, media: :all %>
	  <%= javascript_include_tag :modernizr %>
	  <%= csrf_meta_tags %>
	</head>
	<body>
	  ...
	  <%= javascript_include_tag :application %>
	</body>
	</html>

In your application.scss file, add:

	*= require normalize-rails
	*= require pul-assets
	*= require_self
	*= require_tree .

In your application.js file, add:

	//= require jquery-tablesorter
	//= require jquery-tablesorter/jquery.tablesorter.combined
	//= require pul-assets
	//= require_tree .

In your application.rb file, add:

	require 'susy'
	require 'breakpoint'

To render layout partials, add header just after opening body tag, and footer just before closing body tag:

		...
		<body>
		<%= render 'pul-assets/header' %>
		...
		<%= render 'pul-assets/footer' %>
		</body>
		...

To include the PU Library favicon, add to the application layout's head element:

	<%= favicon_link_tag %>

###Blacklight overrides

Styles: Remove or comment out the imports that come default in the blacklight.scss file under `app/assets/stylesheets`. In addition to the steps above, include the following: 

	@import "pul-assets__blacklight";

Views: Use modified blacklight partials by using the layout partials in the `views/blacklight/` directory. For example:

	<%= render 'pul-assets/blacklight/header_navbar' %>

###Plugins

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
