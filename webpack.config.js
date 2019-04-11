const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  target: 'node',
  externals: [nodeExternals()],
  entry: ['./src/server/index.ts'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          { loader: 'ts-loader' }
        ],
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.ts' ],
  },
  plugins: [
    new CleanPlugin(path.resolve(__dirname, "dist"))
  ]
}
