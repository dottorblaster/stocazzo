var config = {
	sc: 'stocazzo',
	port: 80,
	routes: {
		root: {
			value: "stocazzo",
			big: "gran"
		},
		caps: {
			value: "STOCAZZO",
			big: "GRAN"
		},
		camel: {
			value: "StoCazzo",
			big: "Gran"
		},
		ascii: {
			value: "8====D",
			big: "==="
		},
		underscore: {
			value: "sto_cazzo",
			big: "_gran"
		}
	}
};

module.exports = config;
