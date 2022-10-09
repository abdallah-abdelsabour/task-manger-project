// task handle controllers

const Task = require("../models/task");

exports.getAllTask = (req, res, next) => {
  Task.find({}).then((result) => {
    res.render("index", { tasks: result });
  });
};

exports.getTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    res.render("onetask", { task });
  } catch (error) {
    console.log(error);
    res.send("cant update sorry ");
  }
};

exports.deleteTask = (req, res, next) => {
  Task.findByIdAndRemove(req.params.id).then((result) => {
    console.log(result);
    res.send(result);
  });
};
exports.updateTask = (req, res, next) => {
  res.send("updateTask request api ");
};
exports.createTask = (req, res, next) => {
  const tasktitle = req.body.title;

  const taskBody = req.body.taskBody;

  console.log(req.body);

  Task.create({ title: tasktitle, task: taskBody });
  res.redirect("/api/v1/task/");
};
