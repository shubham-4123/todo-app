// Import Models
const Todo = require("../models/todo.model.js");

// Define Route Handler
exports.getAllTodo = async (req, res) => {  
    try {
        const todo = await Todo.find({});  
        res.status(200).json({
            success: true,
            data: todo,  
            message: 'Entry Created Successfully'
        });
    } catch (error) {
        // Catch and respond with error 
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//for single todo
exports.getTodoById = async (req, res) => {
    try {
        const {id } = req.params;
        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No data found!"
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: `${id} data successfully fetched`,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
