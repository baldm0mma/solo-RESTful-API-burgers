module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:/best_burgers',
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds/dev'
  }
};
