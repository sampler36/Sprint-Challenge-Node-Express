const express = require("express");
const Projects = require("./projectModel");
const router = express.Router();

router.use(express.json());

module.exports = router;
