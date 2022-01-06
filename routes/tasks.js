const express = require("express");
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.put("/", updateTask);
router.delete("/", deleteTask);

module.exports = router;
