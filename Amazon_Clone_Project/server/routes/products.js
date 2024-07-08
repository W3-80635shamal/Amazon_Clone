const express = require('express');
const router = express.Router();
const db = require('../db');
const utils = require('../utils');

router.get('/', async (request, response) => {
  try {
    const statement = `
      SELECT product_id, name, description, price, image
      FROM products
    `;
    const [result] = await db.execute(statement, []);
    response.send(utils.createSuccess(result));
  } catch (ex) {
    console.error(ex);
    response.send(utils.createError(ex));
  }
});

module.exports = router;
