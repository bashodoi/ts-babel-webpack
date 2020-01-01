var path = require('path');

module.exports = {
    // Change to your "entry-point".
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: "/",
        chunkFilename: "static/js/[name].chunk.js"
    },
    resolve: {
        alias: {
            "~common": path.resolve(__dirname, "../common")
        },
        extensions: ['.ts', '.js', '.json'],
        modules:[
            "node_modules",
            "src",
        ]
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            // loader: 'babel-loader',
            use: {
                loader: "babel-loader",
                options: {
                    plugins: []
                },
            }
        }],
    },
    devtool: "source-map",
    target: "node",
    // legacy watch for webpack on docker
    watchOptions: {
        poll: true
    }
};