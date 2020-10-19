const path=require('path');


module.exports = {
    mode: 'development',
    entry: {
        main:'./src/app.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    path.resolve('./my-webpack-loader.js')
                ]
            },{
                test: /\.css$/,
                use: [ 
                    'style-loader',
                    'css-loader'
                ]
            },{
                test: /\.(jpg|png|gif|svg)$/,
                // use: [ 
                //     'file-loader'
                // ],
                
                // loader: 'file-loader',
                loader: 'url-loader',
                options: {
                    publicPath: './dist',
                    name: '[name].[ext]?[hash]',
                    limit: 20000, // 20kbyte 미만의 파일은 자바스크립트 문자열로 변환
                }
            }

        ]
    }
}