const express = require("express");

const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: MainData
 *  description: This is for main data
 * /api/getData:
 *  get:
 *     tags: [MainData]
 *     parameters:
 *         - name: page_number
 *           default: 1
 *           in: query
 *           schema:
 *             type: integer
 *         - name: page_length
 *           default: 1
 *           in: query
 *           require: true
 *           schema:
 *             type: integer
 *     responses:
 *         default:
 *             description: This is default response for it
 */

router.get("/getData", (req, res) => {
  const { page_number, page_length } = req.query;
  res.send(req.query);
});

module.exports = {
  router,
};
