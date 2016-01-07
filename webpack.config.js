module.exports = {
    entry: "./assets/js/entry.js",
    output: {
        path: __dirname + "/assets/js/built",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    }
};
