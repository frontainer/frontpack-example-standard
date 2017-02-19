'use strict';
const frontpack = require('@frontpack/frontpack');
const fp = new frontpack({
  debug: false
});

const config = fp
  .preset([
    'common',
    'style',
    'babel',
    'typescript',
    'html',
    'copy',
    'server'
  ])
  .config({
    entry: {
      main: [
        './src/assets/js/main.js',
        './src/assets/css/style.scss'
      ]
    },
    plugins: [
    ]
  }).option({
    copy: {
      files: [
        {
          context: 'src',
          from: 'assets/lib/**/*'
        }
      ]
    },
    options: {

    }
  }).export();
module.exports = config;