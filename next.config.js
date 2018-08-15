module.exports = {
  webpack: (config, {isServer}) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    
    config.module.rules.push({test:'/\.css$/', 'use':'style-loader'})
    config.module.rules.push({test:'/\.css$/', 'use':'css-loader'})
    config.module.rules.push({test:'/\.css$/', 'use':'less-loader'})
    config.module.rules.push({test:'/\.ts$/', 'use':'ts-loader'})

    return config
  }

}
