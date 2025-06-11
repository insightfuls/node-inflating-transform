const InflatingTransform = require('./index')

new InflatingTransform({
	*generateTransformedData(chunk, encoding) {
		yield {chunk: "foo", encoding: "utf8"};
		yield {chunk: "bar", encoding: "utf8"};
	}
});
