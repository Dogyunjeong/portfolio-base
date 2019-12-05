const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config

    // Example using webpack option
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    if (!config.resolve) {
      config.resolve = {}
    }
    config.resolve.alias ={
      '@components': resolve(__dirname, 'components'),
      '@layouts': resolve(__dirname, 'layouts')
    }
    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  },
})