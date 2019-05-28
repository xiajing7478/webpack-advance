/**
 * @author xiajing
 * @date 2019/5/28 12:00
 */
const path = require('path')
const CssExtractPlugin = require('mini-css-extract-plugin')

function styleLoaders(options) {
  const output = []
  const loaders = cssLoaders(options)
  for (var extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

function cssLoaders(options) {
  options = options || {}
  const cssLoader = {
    loader: 'css-loader',
    // loader: CssExtractPlugin.loader,
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoaer = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }


  function generateLoaders(loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoaer] : [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }
    if (!options.extract) {
      // return [].concat(loaders)
      return [CssExtractPlugin.loader].concat(loaders)
    } else {
      return [CssExtractPlugin.loader].concat(loaders)
    }
  }
  return {
    css: generateLoaders(),
    less: generateLoaders('less'),
    scss: generateLoaders('sass'),
  }
}

function getPath(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  styleLoaders,
  getPath
}
