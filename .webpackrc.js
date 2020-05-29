export default {
  proxy: {
    '/api': {
      target: 'https://api.baxiaobu.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      }
    },
  },
  
  alias: {
    '@': `${__dirname}/src`,
    '@@': `${__dirname}/src/components`,
  },

  extraBabelPlugins: [
    ['import', { 'libraryName': 'antd', 'libraryDirectory': 'es', 'style': 'css' }]
   ],

  disableCSSModules: true,

}