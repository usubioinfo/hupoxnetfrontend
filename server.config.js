module.exports = {
  apps: [
    {
      name: 'hupoxnetfrontend',
      cwd: __dirname,
      script: 'npx',
      interpreter: 'none',
      args: 'serve -s build -l 3860',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
