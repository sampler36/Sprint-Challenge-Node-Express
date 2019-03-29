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
router.put("/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    Actions.update(id, {
      description: req.body.description,
      notes: req.body.notes
    })
      .then((data) => {
        if (data) {
          Actions.get().then((data) => res.json(data));
        } else {
          res.status(404).json({
            errorMessage: "ID not found"
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          errorMessage: "Error"
        });
      });
  }
});

// delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Actions.remove(id)
    .then((data) => res.json(data))
    .catch((data) =>
      res.status(500).json({
        errorMessage: "Oooohhpppps"
      })
    );
});

// use 

module.exports = router;
