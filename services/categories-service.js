const db = require("./db-connection");
const helper = require("./helper");

async function getCategories() {
  const rows = await db.query(`SELECT id, name FROM category`);
  const data = helper.emptyOrRows(rows);
  return { data };
}

module.exports = {
  getCategories
};
