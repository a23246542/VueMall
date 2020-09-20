module.exports = { // 可先移除eslint偵測報錯
  publicPath: './', //  GitHub上打開
  lintOnSave: false, // ##可開關vue的eslint 存檔會給你改
  devServer: {
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hotOnly: false,
    disableHostCheck: true,
  },
  chainWebpack: (config) => {
    // config.module.rules.delete('eslint');
    // const oneOfsMap = config.module.rule('scss').oneOfs.store
    // oneOfsMap.forEach(item => {
    //   item
    //     .use('sass-resources-loader')
    //     .loader('sass-resources-loader')
    //     .options({
    //       // 單隻檔案引入
    //       resources: [path.resolve(__dirname, './src/assets/scss/helpers/_mixin.scss')],

    //       // 多檔案引入
    //       // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
    //     })
    //     .end()
    // })
  },
  // use:[
  //   {
  //     loader: 'sass-loader',
  //           options:{
  //               data: `@import "./src/assets/scss/helpers/_mixin.scss";`
  //           }
  //   }
  // ]
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import "~@/scss/helpers/helpers.scss";`
  //     }
  //   }
  // }
};
