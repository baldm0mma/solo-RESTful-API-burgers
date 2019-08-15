module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:/best_burgers'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
