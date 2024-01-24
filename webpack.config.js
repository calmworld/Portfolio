const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: "[name].[contenthash].js",
	},
	mode: "development",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
		alias: {
			"@host": path.resolve(__dirname, "src/app/"),
		},
		modules: ["src", "node_modules"],
	},
	optimization: {
		splitChunks: {
			chunks: "all",
		},
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					mangle: true,
					compress: {
						toplevel: true,
					},
				},
			}),
		],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: "ts-loader",
			},
			{
				test: /\.d\.ts$/,
				use: "ignore-loader",
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
	devtool:
		process.env.NODE_ENV === "production" ? "source-map" : "eval-source-map",
	devServer: {
		static: path.join(__dirname, "dist"),
		compress: true,
		port: 8080,
		compress: true,
		hot: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "index.html",
		}),
		new CompressionPlugin(),
		// new BundleAnalyzerPlugin(),
	],
};
