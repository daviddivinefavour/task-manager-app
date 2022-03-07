const taskModel = require("../models/task");
const { v4: uuidv4 } = require('uuid');

//Create a new task and save to database 
exports.createTask = async (req, res) => {

          const { name, description} = req.body;
          const _id = uuidv4();
          const task = await new taskModel({
              _id,
              name,
              description
          }).save();
          return res
          .status(200)          
          .json({
                    message: "New task created",
                    task:task
          })
};

// Get all tasks 
exports.getAllTasks = async (req,res)=>{
    console.log("getalltasks")
    const tasks = await taskModel.find({});
    res
    .status(200)
    .json({tasks})
}

// Delete task
exports.deleteTask = async (req,res)=>{
    console.log('try catch')
    try {  
    const {id} = req.params
    let task =  await  taskModel.findByIdAndDelete(id);
    if (!task) {
        return (`No task with id : ${id}`, 404)
      }
    return res.status(200).json({message:"Success! task has been deleted..."})
} catch (error) {
    console.log('error')
    return Promise.reject(error);
}
}

exports.updateTask = async (req,res)=>{
    try {
        const {id} = req.params
        let task = await taskModel.findByIdAndUpdate(id);

        if (!task) {
            return (`No task with id : ${id}`, 404)
          }
          const {name,description} = req.body
          await task.set({
              name,
              description
          }).save()        
          return res
          .json({
              message : "task updated successfully",
              data: task               
          })
        
    } catch (error) {
        return Promise.reject(error);
    }
}