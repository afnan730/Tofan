module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      fallback: {
        stream: require.resolve("stream-browserify"),
        http: require.resolve("http-browserify"),
        url: require.resolve("url"),
        zlib: require.resolve("browserify-zlib"),
        crypto: require.resolve("crypto-browserify"),
        https: require.resolve("https-browserify"),
        fs: false,
      },
    },
  },
};
