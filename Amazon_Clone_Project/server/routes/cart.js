
const express = require('express');
const router = express.Router();
const db = require('../db');
const utils = require('../utils');


router.post('/add', async (req, res) => {
  const { id, product_id, quantity } = req.body;
  try {
    const statement = `
      INSERT INTO cart (id, product_id, quantity)
      VALUES (?, ?, ?)
      ON DUPLICATE KEY UPDATE
        quantity = quantity + VALUES(quantity)
    `;
    const [result] = await db.execute(statement, [id, product_id, quantity]);
    res.send(utils.createSuccess(result));
  } catch (ex) {
    console.error(ex);
    res.send(utils.createError(ex));
  }
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const statement = `
      SELECT c.cart_id, c.product_id, c.quantity, p.name, p.description, p.price, p.image
      FROM cart c
      JOIN products p ON c.product_id = p.product_id
      WHERE c.id = ?
    `;
    const [result] = await db.execute(statement, [id]);
    res.send(utils.createSuccess(result));
  } catch (ex) {
    console.error(ex);
    res.send(utils.createError(ex));
  }
});


router.delete('/remove', async (req, res) => {
  const { id, product_id } = req.body;
  try {
    const statement = `
      DELETE FROM cart
      WHERE id = ? AND product_id = ?
    `;
    const [result] = await db.execute(statement, [id, product_id]);
    res.send(utils.createSuccess(result));
  } catch (ex) {
    console.error(ex);
    res.send(utils.createError(ex));
  }
});

module.exports = router;
