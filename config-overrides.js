const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({
    '@containers': path.resolve('src/containers'),
    '@components': path.resolve('src/components'),
    '@component': path.resolve('src/component'),
    '@styles': path.resolve('src/styles'),
    '@assets': path.resolve('src/assets'),
    '@store': path.resolve('src/store'),
    '@utils': path.resolve('src/utils'),
    '@apis': path.resolve('src/apis'),
    '@parser': path.resolve('src/parser'),
    '@config': path.resolve('src/config'),
    '@hooks': path.resolve('src/hooks'),
    '@context': path.resolve('src/context'),
    '@global': path.resolve('src/global'),
  }),
  // adjustStyleLoaders(rule => {
  //   if (rule.test.toString().includes('scss')) {
  //     rule.use.push({
  //       loader: require.resolve('sass-resources-loader'),
  //       options: {
  //         resources: './src/styles/shared.scss'
  //       }
  //     })
  //   }
  // })
)
