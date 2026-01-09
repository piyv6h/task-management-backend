TASK MANAGEMENT APPLICATION (Backend)
A Node.js + Express + PostgreSQL based Task Management backend application with real-time updates using Socket.io.
This project provides REST APIs to create, read, update, and delete tasks, along with live updates for connected clients.

FEATURES:
I. RESTful APIs for task management
II. PostgreSQL database integration using Sequelize ORM
III. Real-time task updates using Socket.io
IV. Status-based task filtering
V. Clean and scalable project structure
VI. CORS enabled for frontend integration

TECH STACK:
Backend: Node.js, Express.js
Database: PostgreSQL
ORM: Sequelize
Real-Time Communication: Socket.io
API Testing: Thunder Client / Postman

PROJECT STRUCTURE:
| Folder/File                     | Description                     |
| ------------------------------- | ------------------------------- |
| `config/db.js`                  | Database connection setup       |
| `controllers/taskController.js` | Task-related logic              |
| `models/Task.js`                | Mongoose task model             |
| `routes/taskRoutes.js`          | Express routes for tasks        |
| `node_modules/`                 | Installed dependencies          |
| `package.json`                  | Project metadata & dependencies |
| `server.js`                     | Entry point for the server      |
| `README.md`                     | Project documentation           |

SETUP INSTRUCTIONS:
1. Clone the repository
git clone <repository-url>
cd backend

2. Install dependencies
npm install

3. PostgreSQL Setup-
a. Create a database:
CREATE DATABASE taskdb;

b. Create the tasks table:
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(20) DEFAULT 'pending' 
    CHECK (status IN ('pending', 'in-progress', 'completed')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

c. Update your PostgreSQL credentials in:
config/db.js

4. Run the server
npm run dev

Server will start at:
http://localhost:5000

API ENDPOINTS:
a. Create a Task 

(POST)
/api/tasks

Request Body:
{
  "title": "My Task",
  "description": "Sample description"
}


b. Get All Tasks

(GET)
/api/tasks

Filter by status:
/api/tasks?status=pending


c. Update Task Status:

(PATCH)
/api/tasks/:id

Request Body:
{
  "status": "completed"
}


d. Delete a Task

(DELETE)
/api/tasks/:id

REAL-TIME EVENTS (Socket.io) -
The backend emits real-time events on task changes:

Event Name                              Description
taskCreated                     Emitted when a task is created
taskUpdated                     Emitted when a task is updated
taskDeleted                     Emitted when a task is deleted

TESTING:
All APIs were tested using:
Thunder Client (VS Code)
Postman

FUTURE ENHANCEMENTS:
a. User authentication and authorization
b. Frontend application using React
c. Task priorities and due dates
d. Deployment to cloud platforms (AWS / Render / Railway)

AUTHOR:
Piyush Pal
B.Tech - Electronics & Computer Science Engineering

ASSIGNMENT STATUS:
a. Backend APIs completed
b. PostgreSQL database connected
c. Real-time updates implemented
d. APIs tested successfully

FINAL NOTES:
This project demonstrates backend development skills including REST API design, database integration, and real-time communication.
