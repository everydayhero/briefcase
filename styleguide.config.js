const path = require('path')

module.exports = {
  title: 'everydayhero Briefcase',
  components: './packages/briefcase-*/index.js',
  updateWebpackConfig (webpackConfig) {
    const dir = path.join(__dirname, 'packages')
    webpackConfig.module.loaders.push(
      {
        test: /\.js$/,
        include: dir,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        include: [dir, path.join(__dirname, 'node_modules/minimal.css/minimal.css')],
        loader: 'style!css'
      }
    )
    return webpackConfig
  }
}
