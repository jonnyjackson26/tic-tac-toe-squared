const { getDefaultConfig } = require('@expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts = [...defaultConfig.resolver.sourceExts, 'mjs', 'cjs'];
defaultConfig.transformer.minifierConfig = {
  keep_classnames: true,
  keep_fnames: true,
  mangle: {
    keep_classnames: true,
    keep_fnames: true
  }
};

// Optimize for web
defaultConfig.resolver.resolverMainFields = ['browser', 'main'];

// Reduce memory usage
defaultConfig.maxWorkers = 2;
defaultConfig.transformer.workerThreads = 2;
defaultConfig.transformer.minifierPath = 'metro-minify-terser';

module.exports = defaultConfig;