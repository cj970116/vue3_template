module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-pxtorem')({
      rootValue: '192',
      minPixelValue: 2,
      propList: ['*']
    })
  ]
}
