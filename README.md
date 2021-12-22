# This is the data for my blog

It is automatically transformed by [Jekyll](http://github.com/mojombo/jekyll) into a [static site](http://pketh.github.io) whenever I push to the `main` branch using a Github Action. No plugins are used.

# Notes to myself

> Apple M1 [compatibility](https://talk.jekyllrb.com/t/jekyll-installation-on-macs-w-arm64-w-o-package-manager/5365/2) commands using `arch x86` also listed

Force a build with:

	jekyll build
	arch -arch x86_64 bundle exec jekyll build

Watch and build:

	jekyll serve --watch
	arch -arch x86_64 bundle exec jekyll serve --watch

Preview locally:

	http://localhost:4000

# License

The content and design are copyrighted by me and may not be used without permission.
