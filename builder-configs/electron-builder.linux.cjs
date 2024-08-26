const commonConfig = require('./electron-builder.common.cjs');

const config = {
  ...commonConfig,
  linux: {
    target: [
      {
        target: 'AppImage',
        arch: ['x64', 'arm64']
      },
      {
        target: 'deb',
        arch: ['x64', 'arm64']
      },
      {
        target: 'rpm',
        arch: ['x64']
      }
    ],
    category: 'Development',
    icon: 'resources/icons',
    desktop: {
      Name: 'PromptMixer',
      Type: 'Application',
      Categories: 'Development'
    }
  }
};

module.exports = config;