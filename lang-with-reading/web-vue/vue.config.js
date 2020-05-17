module.exports = {
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    externals: {
      firebase: 'firebase',
      firebaseui: 'firebaseui',
    },
    devServer: {
      historyApiFallback: true,
    }
  }
}
