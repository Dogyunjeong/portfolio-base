
const path = require('path');

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
  //   use: [
  //       { loader: 'ts-loader', options: { happyPackMode: true } }
  //   ],
  //   exclude: path.resolve(process.cwd(), 'node_modules'),
  //   include: path.resolve(process.cwd(), 'src'),
  // }
  // config.module.rules[oneOfIdx].oneOf.push(tsLoader)
  // loggingTest(config.module.rules[oneOfIdx].oneOf)
  return {
    ...config, resolve: { ...config.resolve, symlinks: false }
  }
};