const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = (env, argv) => {
  const entry = ['@babel/polyfill'];
  const plugins = [];
  let devtool = 'inline-source-map';

  if (argv.mode === 'development') {
    // entry.push(`webpack-hot-middleware/client`);
	// plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  if (argv.mode === 'production') {
    devtool = false;
  }

  entry.push(`./src/index.js`);

  const config = {
    entry,

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index.js',
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                name: '[name].css',
              },
            },
            // {
            //   loader: 'extract-loader',
            // },
            // 'css-loader',
            // {
            //   loader: 'postcss-loader',
            //   options: {
            //     ident: 'postcss',
            //     plugins: loader => [
            //       require('postcss-import')({ root: loader.resourcePath }),
            //       require('postcss-preset-env')(),
            //       require('postcss-nested')(),
            //       require('cssnano')(),
            //     ],
            //   },
            // },
          ],
        },
        {
          test: /\.(mp4|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[hash].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[hash].[ext]',
              },
            },

            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65,
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
                // the webp option will enable WEBP
                webp: {
                  quality: 75,
                },
              },
            },
          ],
        },
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'entry',
                    targets: {
                      browsers: ['ie 11', 'last 2 versions', 'safari >= 7'],
                    },
                  },
                ],
              ],
              plugins: [
                `@babel/plugin-proposal-class-properties`,
                `@babel/plugin-transform-async-to-generator`,
              ],
            },
          },
        },

        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: false,

                attrs: ['img:src', 'video:src', 'link:href'],
              },
            },
          ],
        },
      ],
    },
    plugins,
    stats: {
      colors: true,
    },
    devtool,
  };

  return config;
};
