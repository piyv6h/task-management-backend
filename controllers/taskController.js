const Task = require("../models/Task");

// CREATE a new task
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = await Task.create({
      title,
      description
    });

    // Emit real-time event
    req.io.emit("taskCreated", task);

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error: error.message });
  }
};

// GET all tasks (with optional status filter)
exports.getAllTasks = async (req, res) => {
  try {
    const { status } = req.query;

    const whereCondition = status ? { status } : {};

    const tasks = await Task.findAll({ where: whereCondition });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error: error.message });
  }
};

// UPDATE task status
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (status) {
      task.status = status;
    }

    await task.save();

    // Emit real-time event
    req.io.emit("taskUpdated", task);

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error: error.message });
  }
};

// DELETE a task
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.destroy();

    // Emit real-time event
    req.io.emit("taskDeleted", { id });

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task", error: error.message });
  }
};
