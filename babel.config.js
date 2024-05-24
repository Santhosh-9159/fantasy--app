module.exports = function(api) {
  api.cache(true); // Caches the computed Babel config function.
  return {
    presets: ['babel-preset-expo'], // Use the Expo preset
    plugins: [
      'react-native-reanimated/plugin', // Reanimated plugin needs to be last
      'nativewind/babel' // Ensure Nativewind is before Reanimated if used
    ],
  };
};
