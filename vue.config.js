module.exports = {
  devServer: {
    proxy: "http://localhost:8080",
  },
  configureWebpack: {
    name: "테스트",
  },
  lintOnSave: false,
};
