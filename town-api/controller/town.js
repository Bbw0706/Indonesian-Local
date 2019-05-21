const db = require('../db/db');
const randomString = require('../helpers/randomString');
const redis = require('redis');
const client = redis.createClient();

const getAll = async (req, res) => {
  try {
    const listData = 'list:town';
    console.log(process.env)
    
    client.get(listData, (err, result) => {
      if (result) {
        return res.json({result: JSON.parse(result)})
      } else {
        async function saveData() {
          const data = await db.any('SELECT * FROM town');
          client.setex(listData, 3600, JSON.stringify(data));
          res.json({
            result: data,
          });
        }
        saveData();
      }
    })
  } catch(e) {
    throw e;
  }
}

module.exports = {
  getAll,
};