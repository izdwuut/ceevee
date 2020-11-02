const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = function (_env, argv) {
    const isProduction = argv.mode === "production";
    const isDevelopment = !isProduction;

    return {
        devtool: isDevelopment && "cheap-module-source-map",
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "assets/js/[name].[contenthash:8].js",
            publicPath: "/"
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                            envName: isProduction ? "production" : "development"
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader",
                        'to-string-loader'
                    ]

                }
            ]
        },
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: [
                    path.join(__dirname, 'public/src'),
                    path.join(__dirname, 'node_modules/@salesforce/design-system-react'),
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(svg|gif|jpe?g|png)$/,
                loader: 'url-loader?limit=10000'
            },
            {
                test: /\.(eot|woff|woff2|ttf)$/,
                loader: 'url-loader?limit=30&name=assets/fonts/webfonts/[name].[ext]'
            }
        ],
        resolve: {
            extensions: [".js", ".jsx"],
        },
        plugins: [
            isProduction &&
            new MiniCssExtractPlugin({
                filename: "assets/css/[name].[contenthash:8].css",
                chunkFilename: "assets/css/[name].[contenthash:8].chunk.css"
            }),
            new CopyWebpackPlugin([
                {
                    from: 'node_modules/pdfjs-dist/cmaps/',
                    to: 'cmaps/'
                },
            ]),
        ].filter(Boolean),


    }
}