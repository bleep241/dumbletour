// Update with your config settings.
var options = {
  development: {
      client: 'pg',
      connection: 'postgres://localhost/sdb_dumbletour',
      migrations: {
          directory: path.resolve(__dirname, '/server/db/sql/migrations'),
        },
      seeds: {
          directory: path.resolve(__dirname, '/server/db/sql/seeds'),
        },
    },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds/production',
        },
    },
};


var environment = process.env.NODE_ENV || 'development';
var config = options[environment];
module.exports = require('knex')(config);