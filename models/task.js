const mongoose = require("../utils/database");

require("dotenv");

const Taskschema = mongoose.Schema({
  title: {
    type: String,
    require: [true, "task title cant be empty"],
    trim: true,
    maxLength: [40, "title cant be more than 40"],
  },

  task: String,
});

// Taskschema.pre("save", (err) => {
//   console.log("new task saved");
// });

const taskModel = mongoose.model("tasks", Taskschema);

module.exports = taskModel;
