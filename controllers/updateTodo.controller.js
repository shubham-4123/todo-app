const Todo = require("../models/todo.model.js");

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const todo = await Todo.findByIdAndUpdate(id, updateData, { new: true });

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No data found to update!"
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: "Update Successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
