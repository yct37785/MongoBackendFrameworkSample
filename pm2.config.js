module.exports = {
  apps: [
    {
      name: 'mongo-backend-framework-sample',
      script: 'dist/index.js',       // compiled output
      watch: false,                  // disable file watching in prod
      instances: 1,                  // or "max" for clustering
      autorestart: true,
      env: {
        NODE_ENV: 'production',
        PORT: 4000
      }
    }
  ]
}
