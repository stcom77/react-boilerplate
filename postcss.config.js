/* eslint-disable global-require */
const pkg = require('./package.json');

module.exports = () => ({
  sourceMap: false,
  plugins: [
    require('postcss-calc')(),
    require('postcss-flexbugs-fixes')(),
    require('autoprefixer')({
      browsers: pkg.browserslist
    }),
  ],
});
