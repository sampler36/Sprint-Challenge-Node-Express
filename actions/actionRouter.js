const express = require("express");
const Actions = require("./actionModel");
const router = express.Router();

router.use(express.json());

// get
router.get("/", (req, res) => {
  Actions.get()
    .then((data) => res.json(data))
    .catch((data) =>
      res.status(500).json({
        errorMessage: "if you see this you way over your head"
      })
    );
});

router.post("/", (req, res) => {
  const name = req.body;
  Actions.insert(name)
    .then((data) => {
      Actions.get().then((data) => res.status(201).json(data));
    })
    .catch((error) =>
      res.status(500).json({
        errorMessage: "Reload the ting"
      })
    );
});

module.exports = router;
