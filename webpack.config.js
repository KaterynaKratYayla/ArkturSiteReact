const path = require( 'path' );
const webpack = require('webpack');
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const Dotenv = require('dotenv-webpack');
// const React = require('react');

/*-------------------------------------------------*/

module.exports = env => {
    // Use env.<YOUR VARIABLE> here:
    console.log('Development: ', env.development); // 'local'
    console.log('Production: ', env.production); // true

    return{
        // webpack optimization mode
        mode: ( 'development' === process.env.NODE_ENV ? 'development' : 'production' ),

        // entry files
        entry: 'development' === process.env.NODE_ENV ? [
            './src/index.dev.js', // in development
        ] : [
            './src/index.prod.js', // in production
        ],

        // output files and chunks
        output: {
            path: path.resolve( __dirname, 'dist' ),
            filename: 'build/[name].js',
        },

        // module/loaders configuration
        module: {
            rules: [
                {
                    test: /\.(png|jp(e*)g|svg|gif|ico)$/,
                    use: ['file-loader'],
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    // use: [ 'babel-loader' ]
                        use: {
                            loader: "babel-loader",
                            options: {
                                presets: ['@babel/preset-env', '@babel/preset-react'],
                                /* plugins: [
                                [ 'react-intl', { messagesDir: './dist/messages' } ]
                                ] */
                            }
                        }
                },
                /* {
                    test: /\.s?css$/,
                    use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
                },
                {
                    test: /\.(png|jpg|gif|ico)$/,
                    use: [
                    {
                        loader: 'file-loader'
                    },
                    ],
                },
                {
                    test: /\.svg$/,
                    use: {
                        loader: 'svg-url-loader',
                        options: {
                            encoding: 'base64'
                        }
                    }
                } */
            ]
        },

        // webpack optimizations
        optimization: {
            minimize: false,
            splitChunks: {
                cacheGroups: {
                    default: false,
                    vendors: false,

                    vendor: {
                        chunks: 'all', // both : consider sync + async chunks for evaluation
                        name: 'vendor', // name of chunk file
                        test: /node_modules/, // test regular expression
                    }
                }
            }
        },

        // development server configuration
        devServer: {
            port: 3000,
            historyApiFallback: true,
            /* client: {
                overlay: false,
            }, */
        },

        // generate source map
        devtool: 'source-map',

        // resolve files configuration
        resolve: {

            // file extensions
            extensions: [ '.js', '.jsx', '.scss', '.css' ],
            // resolve files configuration
            alias: {
                process: 'process/browser',
                stream: "stream-browserify",
                zlib: "browserify-zlib"
            },
            fallback: {
                "crypto": require.resolve("crypto-browserify"),
                "stream": require.resolve("stream-browserify")
            }
        },

        // webpack plugins
        plugins: [
            // fix "process is not defined" error:
            // (do "npm install process" before running the build)
            new webpack.ProvidePlugin({
                process: 'process/browser',
                Buffer: ['buffer', 'Buffer'],
            }),

            // extract css to external stylesheet file
            new MiniCssExtractPlugin( {
                filename: 'build/[name].css'
            } ),

            // prepare HTML file with assets
            new HTMLWebpackPlugin( {
                filename: 'index.html',
                template: path.resolve( __dirname, 'src/index.html' ),
                minify: false,
                favicon: "./src/Components/Library/Images/ArkturDMClogoICO.ico"
            } ),

            // copy static files from `src` to `dist`
            new CopyWebpackPlugin( {
                patterns: [
                    {
                        from: path.resolve( __dirname, 'src/assets' ),
                        to: path.resolve( __dirname, 'dist/assets' )
                    }
                ]
            } ),

            new Dotenv({
               path: path.resolve(__dirname, './.env.development')
            }),
        ],

    }
}