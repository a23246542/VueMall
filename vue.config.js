module.exports = {//可先移除eslint偵測報錯
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}