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

  spec.add_development_dependency "bundler", "~> 1.11"
  spec.add_development_dependency "rake", "~> 10.5"
end
