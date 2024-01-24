const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { dependencies } = require("./package.json");

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/",
	},
	mode: "development",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: "ts-loader",
			},
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "source-map-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	devtool: "source-map",
	devServer: {
		static: path.join(__dirname, "dist"),
		compress: true,
		port: 8080,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "index.html",
		}),
	],
};
