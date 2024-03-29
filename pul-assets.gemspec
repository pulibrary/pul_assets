# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'pul/assets/version'

Gem::Specification.new do |spec|
  spec.name          = "pul-assets"
  spec.version       = Pul::Assets::VERSION
  spec.authors       = ["Axa Mei Liauw"]
  spec.email         = ["aliauw@princeton.edu"]

  spec.summary       = %q{Gem of resuable PUL JS, Sass, graphics, etc.}
  spec.homepage      = "https://github.com/pulibrary/pul_assets"

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_dependency "modernizr-rails", "~> 2.7.1"
  spec.add_dependency "normalize-rails", "~> 3.0.3"
  spec.add_dependency "bourbon", ">= 4.2.6"
  spec.add_dependency "susy", "~> 2.2.12"
  spec.add_dependency "breakpoint", "~> 2.7.0"
  spec.add_dependency "jquery-tablesorter", "~> 1.27.2"
  spec.add_dependency "jquery-datatables-rails", "~> 3.4.0"
  spec.add_development_dependency "bundler", ">= 2.2.10"
  spec.add_development_dependency "rake", ">= 12.3.3"
end
