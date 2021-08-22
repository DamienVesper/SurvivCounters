import * as Webpack from 'webpack';

import * as path from 'path';

const config: Webpack.Configuration = {
    entry: path.resolve(__dirname, `./src/index.ts`),
    output: {
        path: path.resolve(__dirname, `./dist`),
        filename: `bundle.min.js`,
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: `ts-loader`,
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    `style-loader`,
                    `css-loader`,
                    `sass-loader`
                ]
            },
            {
                test: /\.css$/,
                use: [`style-loader`, `css-loader`]
            }
        ]
    },

    resolve: {
        extensions: [`*`, `.js`, `.ts`]
    },

    plugins: [
        new Webpack.ProgressPlugin(),
        new Webpack.BannerPlugin({ banner: `[file]\n Created by DamienVesper#0001.\nLicensed under the terms of the GNU AGPL v3.` })
    ]
};

export default config;
