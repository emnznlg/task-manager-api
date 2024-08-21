const Task = require("../models/taskModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");

exports.createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllTasks = async (req, res, next) => {
  try {
    const apiFeatures = new APIFeatures(Task.find(), req.query).filter().sort();

    const tasks = await apiFeatures.query;

    res.status(200).json({
      status: "success",
      result: tasks.length,
      data: {
        tasks,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.getTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id).select("-__v");

    if (!task) {
      return next(new AppError("Task not found", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return next(
        new AppError("Please provide at least one property to update!", 400),
      );
    }

    const { id } = req.params;

    const task = await Task.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });

    if (!task) {
      return next(new AppError("Task not found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return next(new AppError("Task not found with that ID", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
