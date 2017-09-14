/**
 * 文件处理
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { __DEV__ } = require('./constants')
const lessLoaderVars = {}
const postCSSConfig = JSON.stringify(require('./utils').postCSSConfig);
let rules = [ // 定义各种loader
  {
    test: /\.ts$/,
    enforce: 'pre',
    loader: 'tslint-loader',
    options: {
      emitErrors: true,
      failOnHint: true,
      typeCheck: false,
      fix: true,
      appendTsSuffixTo: [/\.vue$/],
    }
  },
  {
    test: /\.less$/,
    enforce: 'pre',
    loader: 'stylefmt-loader',
    options: {
      config: '.stylelintrc.json'
    }
  },
  ...require('./rules.css')({
    __DEV__,
    lessLoaderVars,
    postCSSConfig
  }),
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: {
        ...require('./rules.css')({
          __DEV__,
          lessLoaderVars,
          postCSSConfig
        }),
      }
      // other vue-loader options go here
    }
  },
  //files
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'images/[name].[hash:7].[ext]'
    }
  },
  {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'media/[name].[hash:7].[ext]'
    }
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'fonts/[name].[hash:7].[ext]'
    }
  }
]

if (__DEV__) {
  rules.push({
    test: /\.ts$/,
    exclude: /(node_modules)/,
    use: [{
      loader: 'ts-loader',
      options: {
        jsx: true,
        happyPackMode: true,
        transpileOnly: true,
      }
    }]
  })
} else {
  //生产环境
  rules.push({
    test: /\.ts$/,
    exclude: /(node_modules)/,
    use: [{
      loader: 'ts-loader',
      options: {
        jsx: true,
        happyPackMode: true,
        transpileOnly: true,
      }
    },
    {
      loader: 'strip-loader',
      options: { strip: ['logger.info', 'logger.debug', 'console.log', 'console.debug'] }
    }
    ]
  })
}
module.exports = rules
