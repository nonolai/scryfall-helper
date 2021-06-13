const { VueLoaderPlugin } = require('vue-loader');

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },
        ],
    },
    output: {
        filename: 'scryfall-helper.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new VueLoaderPlugin()],
};
