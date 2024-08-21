const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Task must have a title"],
  },
  description: {
    type: String,
    required: [true, "Task must have a description"],
  },
  dueDate: {
    type: Date,
    required: [true, "Task must have a dueDate"],
  },
  status: {
    type: String,
    enum: ["pending", "completed", "in progress"],
    default: "pending",
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
