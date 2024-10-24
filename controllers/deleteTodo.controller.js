const Todo = require('../models/todo.model.js')

exports.deleteTodo = async (req,res) =>{
    try{
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.json({
            success:true,
            message:'Todo deleted',
        })

    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}