const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
    mode: 'development',
    entry: './src/index.js', // Explicitly set entry point
    output: {
        filename: 'bundle.js', // Name of the bundled file
        path: __dirname + '/dist', // Physical output folder (optional in dev)
        clean: true // Clean the output directory before each build
    },
    devServer: {
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}