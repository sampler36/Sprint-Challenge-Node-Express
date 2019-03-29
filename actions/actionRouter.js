const express = require("express");
const Actions = require("../data/dbConfig");
const router = express.Router();

router.use(express.json());

module.exports = router;
