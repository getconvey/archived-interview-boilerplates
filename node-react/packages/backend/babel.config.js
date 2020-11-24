module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        targets: { node: 'current' },
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
  ]
};
