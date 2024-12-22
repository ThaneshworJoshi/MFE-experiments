const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

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
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:8081/remoteEntry.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}