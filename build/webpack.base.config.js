const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  entry:"./src/index.ts",
  output:{
    filename:"app.js"
  },
  resolve:{
    extensions:[".js",".ts","tsx"]
  },
  module:{
    rules:[
      {
        test:/\.tsx?$/i,
        use:[{
          loader:'ts-loader'
        }],
        exclude:/node-modules/
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/tpl/index.html'
    })
  ]
}