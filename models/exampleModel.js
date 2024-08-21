const mongoose = require("mongoose");

const exampleSchema = new mongoose.Schema({
  example: {
    type: String,
    required: [true, "Book must have a title"],
  },
  
});

const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;
