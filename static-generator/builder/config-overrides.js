
const resolve = require('resolve');

module.exports = (config, env) => {
  const babelMatch = /\.(js|mjs|jsx|ts|tsx)$/
  let babelLoader
  let babelLoaderIdx
  let oneOfIdx
  config.module.rules.forEach((r, ridx) => {
    if (!r || !r.oneOf) {
      return
    }
    oneOfIdx = ridx
    r.oneOf.forEach((rule, idx) => {
      if (rule.test && rule.test.toString() === babelMatch.toString()) {
        babelLoader = rule
        babelLoaderIdx = idx
      }
    })
  })
  babelLoader.options.presets.push([
    '@babel/preset-typescript',
    {
      allowNamespaces: true
    }
  ])
  if (babelLoader.options.presets.length !== 2) {
    throw new Error('Failed to add preset')
  }

  // babelLoader.test = /\.(js|mjs|jsx)$/
  // const tsLoader = {
  //   test: /\.tsx?$/,
  //   loader: 'ts-loader'
  // }
  // config.module.rules[oneOfIdx].oneOf.splice(babelLoaderIdx - 1, 0, tsLoader)
  return {
    ...config, resolve: { ...config.resolve, symlinks: false }
  }
};