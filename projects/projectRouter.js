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
router.post("/", (req, res) => {
    const name = req.body;
    Projects.insert(name)
      .then((data) => {
        Projects.get().then((data) => res.status(201).json(data));
      })
      .catch((error) =>
        res.status(500).json({
          errorMessage: "Reload the ting"
        })
      );
  });

module.exports = router;
