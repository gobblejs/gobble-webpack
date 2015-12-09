
// I would like to call this requirement just "webpack", but then I'd have a name collision
var webpacker = require('webpack');

function webpack ( inputdir, outputdir, options, callback ) {

	if (!options.entry) {
		throw new Error("Gobble-webpack requires the 'entry' option to be set.");
	}

	options.context = inputdir;
	if (!options.output) { options.output = { filename: options.entry }; }
	options.output.path = outputdir;

	if (options.sourceMap === true) {
		options.output.sourceMapFilename = '[file].map';
		options.devtool = 'source-map';
	}

	webpacker(options, callback);
}

module.exports = webpack;

