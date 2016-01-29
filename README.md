# Princeton University Library - Assets

Gem of resuable PUL JS, Sass, graphics, etc. for Rails apps.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'pul-assets'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install pul-assets

## Usage

In your application.scss file, add:

    @import 'pul-assets';

## Development

1. Update version number in `/lib/pul/assets/version.rb`
2. Make sure repo has latest codebase
3. run `rake build` and `rake release` to update gem in Rubygems
