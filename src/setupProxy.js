const {
  createProxyMiddleware,
  fixRequestBody,
} = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://op.digesto.com.br",
      changeOrigin: true,
      onProxyReq: function onProxyReq(proxyReq, req, res) {
        proxyReq.setHeader(
          "Authorization",
          `Bearer 0b137ecf-264f-4fe8-add9-b62aac242bcd`
        );
      },
    })
  );
};
