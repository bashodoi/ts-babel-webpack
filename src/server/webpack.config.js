// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    // Change to your "entry-point".
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '/',
        chunkFilename: 'static/js/[name].chunk.js',
    },
    resolve: {
        alias: {
            '~common': path.resolve(__dirname, './common'),
        },
        extensions: ['.ts', '.js', '.json'],
        modules: ['node_modules', 'src'],
    },
    module: {
        rules: [
            {
                // Include ts, tsx, js, and jsx files.
                test: /\.(ts|js)?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                /**
                                 * https://babeljs.io/docs/en/babel-preset-env
                                 * add new JS feature support, e.g. Iterators, async, generators
                                 *
                                 * FIXES:: regeneratorRuntime is not defined
                                 */
                                '@babel/preset-env', // fixes regeneratorRuntime is not defined
                                {
                                    targets: {
                                        node: 'current',
                                    },
                                },
                            ],
                        ],
                        plugins: [],
                    },
                },
            },
        ],
    },
    devtool: 'source-map',
    target: 'node',
    // legacy watch for webpack on docker
    watchOptions: {
        poll: true,
    },
};
