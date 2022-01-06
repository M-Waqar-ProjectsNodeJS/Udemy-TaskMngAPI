const Task = require("../models/task");
const asyncWrapper = require("../middleware/async-wrapper");
const { createNotFoundError } = require("../helpers/customError");

const getAllTasks = asyncWrapper(async (req, res, next) => {
  const tasklist = await Task.find();
  res.status(200).json(tasklist);
});

const getTaskById = asyncWrapper(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    res.status(200).json(task);
  } else {
    next(createNotFoundError("task not found", 404));
  }
});

const createTask = asyncWrapper(async (req, res, next) => {
  const newTask = new Task({
    title: req.body.title,
    status: req.body.status,
  });
  await newTask.save();
  res.status(200).json(newTask);
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findById(req.body.id);
  if (task) {
    task.title = req.body.title;
    task.status = req.body.status;
    await task.save();
    res.status(200).json(task);
  } else {
    next(createNotFoundError("task not found", 404));
  }
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findById(req.body.id);
  if (task) {
    await task.delete();
    res.status(404).json({ message: "task deleted" });
  } else {
    next(createNotFoundError("task not found", 404));
  }
});

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
