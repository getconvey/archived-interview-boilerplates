const fs = require('fs');
const path = require('path');

const root = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(root, relativePath);

module.exports = {
  paths: {
    build: resolvePath('build'),
    favicon: resolvePath('src/favicon.ico'),
    html: resolvePath('src/index.html'),
    index: resolvePath('src/index.js'),
    nodeModules: resolvePath('node_modules'),
    packageJson: resolvePath('package.json'),
    root: resolvePath('.'),
    src: resolvePath('src'),
  },
};
