const withLess = require('@zeit/next-less')
const withTypescript = require('@zeit/next-typescript')
const resolve = require('resolve')


module.exports = withTypescript(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    // theme antd here
    modifyVars: {'@primary-color': '#1Dd57A'}
  },
  webpack: (config, { defaultLoaders, dir, isServer }) => {
    defaultLoaders.babel.options.plugins.push(['import', {
      'libraryName': 'antd',
      'style': true
    }])

    config.externals = []

    if (isServer) {
      config.externals.push((context, request, callback) => {
        resolve(request, { basedir: dir, preserveSymlinks: true }, (err, res) => {
          if (err) {
            return callback()
          }

          // exclude webpack itself and antd from externals
          if (res.match(/node_modules[/\\].*\.js/) && !res.match(/node_modules[/\\]webpack/) && !res.match(/node_modules[/\\]antd/)) {
            return callback(null, `commonjs ${request}`)
          }

          callback()
        })
      })
    }

    return config
  },
}))