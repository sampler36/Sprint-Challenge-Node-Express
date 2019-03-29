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
// insert
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
//   update
  router.put("/:id", (req, res) => {
    const { id } = req.params;
    if (id) {
      Projects.update(id, { 
          description: req.body.description,
          name: req.body.name
       })
        .then((data) => {
          if (data) {
            Projects.get().then((data) => res.json(data));
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
    Projects.remove(id)
      .then((data) => res.json(data))
      .catch((data) =>
        res.status(500).json({
          errorMessage: "Oooohhpppps"
        })
      );
  });


  // additional missing project action getbyId
router.get("/actions/:id", (req, res) => {
    Projects.getProjectActions(req.params.id)
      .then((data) => res.json(data))
      .catch((data) =>
        res.status(500).json({
          errorMessage: "Something New"
        })
      );
  });
  

module.exports = router;
