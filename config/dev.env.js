'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
   API_ROOT: '"http://test.yyccc.cn:7002"',
  API_HOST: '"http://test.yyccc.cn:7002"',
})
