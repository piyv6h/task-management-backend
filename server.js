const sequelize = require("./config/db");
const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"]
  }
});

app.use((req, res, next) => {
  req.io = io;
  next();
});

io.on("connection", (socket) => {
  console.log("A client connected: " + socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected: " + socket.id);
  });
});

app.get("/", (req, res) => {
  res.send("Backend is running.");
});

app.use("/api/tasks", taskRoutes);

const PORT = 5000;

sequelize.authenticate()
  .then(() => {
    console.log("PostgreSQL connected successfully");
  })
  .catch((err) => {
    console.error("PostgreSQL connection failed:", err);
  });

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
