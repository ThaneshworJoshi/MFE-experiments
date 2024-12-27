const HtmlWebpackPlugin = require('html-webpack-plugin'); // Plugin to simplify creation of HTML files
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin'); // Plugin for module federation

module.exports = {  
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart', // unique name for the module being exposed
            filename: 'remoteEntry.js', // Name of the file that serves as the entry point for this module
            exposes: {
                './CartShow': './src/index' // Exposes './src/index' as './CartShow' for other applications to use
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html' // Generates an HTML file using the specified template
        })
    ]
}