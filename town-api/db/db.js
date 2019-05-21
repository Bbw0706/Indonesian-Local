const pg = require('pg-promise')();
const db = pg(`postgres://postgres:1234@localhost:5432/chat`);

module.exports = db;