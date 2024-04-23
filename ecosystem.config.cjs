module.exports = {
  apps: [
    {
      name: 'invest-africa',
      script: 'dist/index.js',
      env: {
        PORT: 9000,
      },
    },
  ],
};
