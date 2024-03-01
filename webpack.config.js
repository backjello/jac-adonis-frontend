const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

let htmlPageNames = ['home', 'register', 'login', 'profile', 'periodicals', 'search'];
const entry = {}
let multipleHtmlPlugins = htmlPageNames.map(name => {
    entry[name] = `./src/pages/${name}/${name}.ts`
    return new HtmlWebpackPlugin({
        template: `./src/pages/${name}/${name}.html`, // relative path to the HTML files
        inject: true,
        filename: `${name}.html`, // output HTML files
        chunks: [`${name}`] // respective JS files
    })
});

module.exports = {
    entry: entry,
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: multipleHtmlPlugins,

    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 4000,
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
    },
};