module.exports = ({ config }) => {
  config.resolve.alias['react-native-svg'] = 'react-native-svg-web';
  config.resolve.alias['react-native'] = 'react-native-web';

  config.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: {
              removeViewBox: false,
            },
          },
        },
      },
    ],
  });

  const fileLoaderRule = config.module.rules.find(
    ({ loader }) => loader && loader.includes('file-loader')
  );

  if (fileLoaderRule) {
    fileLoaderRule.test =
      /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;
  }

  const babelLoaderRule = config.module.rules[1];

  config.module.rules.push({
    test: /\.js$/,
    use: babelLoaderRule.use,
    exclude: /node_modules\/(?!(react-native|react-native-web)\/).*/,
  });

  return config;
};
