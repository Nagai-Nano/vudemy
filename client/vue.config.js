const { join } = require('path')

module.exports = {
  outputDir: join(__dirname, '..', 'dist'),
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:1337'
      }
    }
  }
}
