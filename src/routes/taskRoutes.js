const express = require('express')
const taskController = require('../controllers/taskController')
const router = express.Router()

router.get('/',(req,res)=>{
          console.log("home page")
          res.send('task manager')
})
router.post('/task', taskController.createTask); // creates a new task
 router.get('/tasks',taskController.getAllTasks); // fetch all tasks from database.
 router.delete('/task/delete/:id',taskController.deleteTask); // delete task from database
 router.patch('/task/update/:id', taskController.updateTask); // update task in database.
module.exports = router
