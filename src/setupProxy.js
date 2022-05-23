const {
  createProxyMiddleware,
  fixRequestBody,
} = require("http-proxy-middleware");

const TOKEN = process.env.REACT_APP_API_TOKEN;

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://op.digesto.com.br",
      changeOrigin: true,
      onProxyReq: function onProxyReq(proxyReq) {
        proxyReq.setHeader("Authorization", `Bearer ${TOKEN}`);
      },
    })
  );
};
