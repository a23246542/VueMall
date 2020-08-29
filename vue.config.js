module.exports = { // 可先移除eslint偵測報錯
  publicPath: './', //  GitHub上打開
  lintOnSave: false,
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
};
