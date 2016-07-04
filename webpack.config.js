let path = require("path");

module.exports = {
    entry: {
        app: ['./src/main.js']
    },
    output : {
        path     : path.join(__dirname, 'dist'),
        publicPath: "/public/",
        filename : 'dist.js'
    },

    module : {
        loaders: [
            {
                test    : /\.js$/,
                exclude : /node_modules/,
                loader : 'babel',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react', 'stage-0', 'stage-1', 'stage-2', 'stage-3']
                }
            },

            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
                include: path.join(__dirname, 'css')
            },


            {
              test: /\.woff$/,
              loader: 'url?limit=50000',
              include: path.join(__dirname, 'font')
            }
        ]
    }
};

