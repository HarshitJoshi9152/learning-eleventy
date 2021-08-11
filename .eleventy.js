module.exports = function (eleventyConfig) {
	// console.log(eleventyConfig);
	eleventyConfig.addPassthroughCopy("./src/styles/index.css");
	eleventyConfig.addWatchTarget("./src/styles/index.css");
	eleventyConfig.setTemplateFormats([
		"md",
		"njk",
		"css",
		// images
		"jpg",
		"png"
	]);
	return {
		passthroughFileCopy: true,
		dir: {
			input: "src",
			output: "build"
		}
	};
};
