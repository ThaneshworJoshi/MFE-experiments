const HtmlWebpackPlugin = require('html-webpack-plugin'); // Plugin for generating HTML files with automatic injection of scripts
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin'); // Plugin for module federation to share/load code between projects

module.exports = {  
    mode: 'development', // Set Webpack to development mode for better debugging and faster builds
    entry: './src/index.js', // Explicit entry point for the application
    output: {
        filename: 'bundle.js', // Name of the output bundle
        path: __dirname + '/dist', // Output directory (optional in development mode)
        clean: true // Ensures the output directory is cleared before each build
    },
    devServer: {
        port: 8080 // Development server will run on port 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
             // Name of the current application/module
            remotes: {
                products: 'products@http://localhost:8081/remoteEntry.js', 
                // Remote application "products" is available at specified URL and file
                cart: 'cart@http://localhost:8082/remoteEntry.js'
                // Remote application "carts" is available at specified URL and file
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html' // Path to the HTML template for the generated output
        })
    ]
}
