module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/utils': './src/utils',
          '@/pages': './src/pages',
          '@/navigator': './src/navigator',
          '@/modles': './src/modles',
          '@/config': './src/config',
          '@/components': './src/components',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
