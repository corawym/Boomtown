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
      return pgclient.query(`SELECT * FROM items WHERE id = ${id}`)
      .then(response => response.rows)
      .catch(errors => console.log(errors));
    },
    getTags(){
      return pgclient.query("SELECT * FROM tags")
      .then(response => response.rows)
      .catch(errors => console.log(errors));
    },
    getTag(id){
      return pgclient.query(`SELECT tags.id, tags.title FROM tags JOIN itemtags on tags.id = itemtags.tagid WHERE itemtags.itemid = ${id}`)
      .then(response => response.rows)
      .catch(errors => console.log(errors));
    },
    getUserOwnedItems(id){
      return pgclient.query(`SELECT * FROM items WHERE itemowner = '${id}'`)
      .then(response => response.rows)
      .catch(errors => console.log(errors))
    },
    getUserBorrowedItems(id){
      return pgclient.query(`SELECT * FROM items WHERE borrower = '${id}'`)
      .then(response => response.rows)
      .catch(errors => console.log(errors))
    }
  };
}