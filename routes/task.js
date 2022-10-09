const express = require("express");

const taskConroller = require("../controllers/task");

const router = express.Router();

router
  .route("/api/v1/task/:id")
  .get(taskConroller.getTask)
  .delete(taskConroller.deleteTask)
  .patch(taskConroller.updateTask);

router
  .route("/api/v1/task/")
  .get(taskConroller.getAllTask)
  .post(taskConroller.createTask);

module.exports = router;
