Open Accelerated Pages
======================

Open Accelerated Pages, or OAP, is a set of tools designed to have performance benefits similar to Google AMP, that works on any platform and not only within a walled garden.

OAP performs configurable server-side optimization in the form of an HTTP middleware: it proxies requests to your applicative backend (PHP, Node...) and applies optimizations on the fly. Optimizations can then be safely cached, eg. in Varnish.

Core features, all of which are optional, include:
- script inlining
- stylesheet inlining
- icons inlining
- JS minification (using UglifyJS)
- CSS minification (using CSS Nano)
- HTMl minification (using `html-minifier`)
- images inlining
- localStorage-based asset caching

Not all OAP transforms are absolutely safe, but as long as your HTML-generating backend (PHP, Node...) outputs reasonably well-behaved code, it shouldn't break anything.

OAP can either be used as a standalone optimization proxy, or as a Node HTTP middleware (bindings provided for Node `http`, `express`, and `koa`).

OAP Proxy works with any backend, including ones written in your favorite platform, whatever it is (PHP, Ruby, Python, Go, Erlang, Node...).
