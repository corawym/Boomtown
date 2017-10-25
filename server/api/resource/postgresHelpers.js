const { Pool } = require('pg')

module.exports = function(app) {
  const pgclient = new Pool({
    user: app.get('PG_USER'),
    host: app.get('PG_HOST'),
    password: app.get('PG_PASSWORD'),
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
  })
  return pgclient;
}