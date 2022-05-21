const {
  createProxyMiddleware,
  fixRequestBody,
} = require("http-proxy-middleware");

const TOKEN = "3013c791-18ea-48ff-b4ef-ad5cae624cb6";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://op.digesto.com.br",
      changeOrigin: true,
      onProxyReq: function onProxyReq(proxyReq, req, res) {
        proxyReq.setHeader("Authorization", `Bearer ${TOKEN}`);
      },
    })
  );
};
