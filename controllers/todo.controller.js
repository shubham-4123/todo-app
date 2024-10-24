// Import Models
const Todo = require("../models/todo.model.js");

// Define Route Handler
exports.createTodo = async (req, res) => {  
    try {
        const todo = await Todo.create(req.body);  
        res.status(201).json({
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

