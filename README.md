# This is the data for my blog

It is automatically transformed by [Jekyll](http://github.com/mojombo/jekyll) into a [static site](https://pketh.github.io) whenever I push to the `main` branch using a Github Action. No plugins are used.

> [Apple M1 compatibility](https://talk.jekyllrb.com/t/jekyll-installation-on-macs-w-arm64-w-o-package-manager/5365/2) commands using `arch x86` listed below each. Maybe one day they won't be needed, but this is Ruby … so we can only pray.

# Setup

in `bash`

	bundle install
	arch -arch x86_64 bundle install --path vendor/bundle

# Run

Watch and build:

	bundle exec jekyll serve --watch

Preview locally:

	http://localhost:4000

# License

The content and design are copyrighted by me and may not be used without permission.
