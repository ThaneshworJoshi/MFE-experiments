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
                './CartShow': './src/bootstrap.js' // Exposes './src/bootstrap.js' as './CartShow' for other applications to use
            },
            shared: ['faker'] // List of dependencies that should be shared between the host and remote applications
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html' // Generates an HTML file using the specified template
        })
    ]
}