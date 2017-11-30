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
    },
    createNewItem(title, description, imageurl, tags, itemowner) {
      pgclient.query(`INSERT INTO items (title, description, imageurl, itemowner) VALUES ('${title}', '${description}', '${imageurl}', '${itemowner}') RETURNING id`)
              .then(res => {
                const tagsSQLValues = tags.reduce((acc,curr,index,array) => {
                  if(index < array.length-1) {
                    acc = `${acc}('${res.rows[0].id}','${curr}'),`;
                  }else{
                    acc = `${acc}('${res.rows[0].id}','${curr}')`;
                  }
                  return acc
                },'')
                pgclient.query(`INSERT INTO itemtags (itemid, tagid) VALUES ${tagsSQLValues}`)
              })
              .catch(errors => console.log(errors))
    }
  };
}