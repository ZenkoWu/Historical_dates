const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    devServer: {
        port: 3001,
        hot: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.bundle\.ts$/,
                use: {
                    loader: 'bundle-loader',
                    options: {
                        name: '[name]'
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(svg|png|gif|jpg)$/,
                exclude: /fonts/,
                loader: 'file-loader'
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2)$/,
                loader: "file-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
              },

        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public', 'index.html'),
            favicon: './public/favicon.ico',
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
   },
};