const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy.createProxyMiddleware('/apiTJ', {
      target: "https://c.m.163.com",
      changeOrigin: true,
      pathRewrite: { '^/apiTJ': "" }
    }),
    proxy.createProxyMiddleware('/apiWY', {
      target: "https://3g.163.com",
      changeOrigin: true,
      pathRewrite: { '^/apiWY': "" }
    }),
    proxy.createProxyMiddleware('/apiXQ', {
      target: "https://m.163.com",
      changeOrigin: true,
      pathRewrite: { '^/apiXQ': "" }
    })
  )
}