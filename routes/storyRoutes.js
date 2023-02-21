const express = require("express");
const controller = require("../controllers/storyController");

const router = express.Router();

//GET send all stories to user

router.get("/", controller.index);

//GET send a new form
router.get("/new", controller.new);

//post create a new story

router.post("/", controller.create);

//get send details of story by id
router.get("/:id", controller.show);

//get edit the existing story
router.get("/:id/edit", controller.edit);

//PUT update details of story by id
router.put("/:id", controller.update);

//DELETE update details of story by id
router.delete("/:id", controller.delete);
module.exports = router;
