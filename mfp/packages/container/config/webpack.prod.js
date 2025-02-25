const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin'); 
const commonConfig = require('./webpack.common');
const packegeJson = require('../package.json');

const domain = process.env.PRODECTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/',
    },  

    plugins: [  
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`,
            },
            shared: packegeJson.dependencies,
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);