const db = require("./db-connection");
const helper = require("./helper");

/* CRUD Functions */
async function getProducts() {
  const rows = await db.query(`SELECT id, name, url_image, price, discount, category FROM product`);
  const data = helper.emptyOrRows(rows);
  return { data };
}

module.exports = {
    getProducts
};