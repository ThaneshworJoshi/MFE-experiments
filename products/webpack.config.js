const HtmlWebpackPlugin = require('html-webpack-plugin'); // Plugin to simplify creation of HTML files
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin'); // Plugin for module federation

module.exports = {  
    // Webpack mode set to development for faster builds and better debugging
    mode: 'development',
    devServer: {
        port: 8081 // Development server will run on port 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products', // Unique name for the module being exposed
            filename: 'remoteEntry.js', // Name of the file that serves as the entry point for this module
            exposes: {
                './ProductsIndex': './src/index' // Exposes './src/index' as './ProductsIndex' for other applications to use
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html' // Generates an HTML file using the specified template
        })
    ]
}
