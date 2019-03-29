const express = require("express");
const Projects = require("./projectModel");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
    Projects.get()
      .then((data) => res.json(data))
      .catch((data) =>
        res.status(500).json({
          errorMessage: "Go back mate !!"
        })
      );
  });
 

module.exports = router;
