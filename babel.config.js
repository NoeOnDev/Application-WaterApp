module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'DEVELOPMENT',
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
