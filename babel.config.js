module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            services: './src/services',
            screens: './src/screens',
            types: './src/types',
            utils: './src/utils',
            components: './src/components',
            theme: './src/theme',
            navigation: './src/navigation',
            mocks: './src/mocks',
            store: './src/store',
            hooks: './src/hooks',
            features: './src/features',
            queries: './src/queries',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
