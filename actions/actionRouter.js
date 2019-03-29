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
 
module.exports = router;
