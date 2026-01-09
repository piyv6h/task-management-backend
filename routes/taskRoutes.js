const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");

// POST /api/tasks → create task
router.post("/", taskController.createTask);

// GET /api/tasks → get all tasks
// GET /api/tasks?status=pending → filter by status
router.get("/", taskController.getAllTasks);

// PATCH /api/tasks/:id → update task
router.patch("/:id", taskController.updateTask);

// DELETE /api/tasks/:id → delete task
router.delete("/:id", taskController.deleteTask);

module.exports = router;
