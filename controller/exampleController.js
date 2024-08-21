const Example = require("../models/exampleModel");
const AppError = require("../utils/appError");

exports.example = async (req, res, next) => {
  try {
    const example = await Example.find();

    if (!books) {
      return next(new AppError("No example found!", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        example: example,
      },
    });
  } catch (error) {
    next(error);
  }
};

