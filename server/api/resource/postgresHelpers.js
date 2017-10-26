import { Pool } from 'pg'

export default function(app) {

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
      return pgclient.query("SELECT * FROM items")
      .then(response => response.rows)
      .catch(errors => console.log(errors));
    },
    getItem(id){
      return pgclient.query("SELECT * FROM items(id)")
      .then(response => response.rows)
      .catch(errors => console.log(errors));
    },
    getTags(){
      return pgclient.query("SELECT * FROM tags")
      .then(response => response.rows)
      .catch(errors => console.log(errors));
    }
  };
}