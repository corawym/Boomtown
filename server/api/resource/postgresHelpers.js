 import { Pool } from 'pg'

module.exports = function(app) {
  const pgclient = new Pool({
    user: app.get('PG_USER'),
    host: app.get('PG_HOST'),
    password: app.get('PG_PASSWORD'),
    database: app.get('PG_DATABASE'),
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
  })
  return {
    getItems(){
      return pgclient.query("SELECT * from items").then(res=>(res.rows));
    }
  };
}