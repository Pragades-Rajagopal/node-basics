const { Transform } = require('stream');
const { stringify } = require('ndjson');

const Name = Transform ({
	objectMode : true,
	transform : ({first, last}, encoding, callback) => {
		callback(null, {name : first + " " + last});
	},
});

Name.pipe(stringify()).pipe(process.stdout);

Name.write({first: "John", last: "Rambo"});
Name.write({first: "Dutch", last: "Mann"});
