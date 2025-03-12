//const fs = require("fs");
//const NOT_FOUND_PATH = "_site/404.html";

module.exports = 
	function(eleventyConfig) {
		eleventyConfig.addPassthroughCopy("css");
		eleventyConfig.addPassthroughCopy("img");
	};