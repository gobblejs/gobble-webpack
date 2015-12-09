# gobble-webpack

Bundle javascript modules with webpack in your GobbleJS workflow.


Yeah, you can already use [`gobble-browserify`](https://github.com/gobblejs/gobble-browserify) and [`gobble-rollup`](https://github.com/gobblejs/gobble-rollup) to bundle up your files. But if you need the webpack flavour, this is the tool to use.


## Installation

I assume you already know the basics of [Gobble](https://github.com/gobblejs/gobble).

```bash
npm i -D gobble-webpack
```

## Usage

In your `gobblefile`, run the `webpack` gobble transform, specifying at least the `entry` option, like so:

```javascript
var gobble = require( 'gobble' );
module.exports = gobble( directory_with_a_javascript_package )
	.transform( 'webpack', {entry: './index.js'} );
```

The options passed to this gobble transform can be those in a [webpack config object](
https://webpack.github.io/docs/configuration.html#configuration-object-content).
Just make sure to omit the context directory and the output path, as these
are handled by gobble.

Aditionally, a `sourceMap` option is available. This is just a shorthand for a
sensible way to make gobble-compatible sourcemaps. The following:

```js
gobble( somewhere ).transform( 'webpack', {
	entry: './index.js',
	sourceMap: true
} );
```

is equivalent to:

```js
gobble( somewhere ).transform( 'webpack', {
	entry: './index.js',
	output: {
		sourceMapFilename: '[file].map',
		devtool: 'source-map'
	}
} );
```


## License

```
"THE BEER-WARE LICENSE":
<ivan@sanchezortega.es> wrote this file. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return.
```
