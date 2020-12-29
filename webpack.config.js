const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './build/background.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'background.js'
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/manifest.json" },
                { from: "build/inject.js" },
                { from: "src/popup", to: "popup"},
            ],
        }),
    ],
};
