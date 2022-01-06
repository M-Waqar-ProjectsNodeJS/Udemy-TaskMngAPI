const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

taskSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

taskSchema.set("toJSON", {
  virtuals: true,
});

const task = mongoose.model("tasks", taskSchema);

module.exports = task;
