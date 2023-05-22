const HtmlWebpackPlugin = require('html-webpack-plugin');
const devtools = [
    'eval',
    'eval-source-map',
    'source-map',
    'cheap-source-map',
    'cheap-module-source-map',
    'inline-source-map',
    'hidden-source-map',
    'nosources-source-map'
]


module.exports = devtools.map(key => {
    return {
        entry: './src/index.js',
        output: {
            filename: `js/${key}.js`
        },
        devtool: key,
        plugins: [new HtmlWebpackPlugin({
            filename: `${key}.html`
        })],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                }
            ]
        }
    }
})