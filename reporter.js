var gitblame = require("gitblame");

exports.reporter = function(res) {
	getFiles(res).forEach(function(file) {
		gitblame.sync(file, function() {
			// ..
		})
	});
}

function getFiles(res) {
	return res;
}
