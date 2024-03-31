const { StatusCodes } = require('http-status-codes');

const { TodoService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /Todos 
 * req-body {
    "todo":"hi",
    "completed":false,
    "userid":1
}
 */
async function createTodo(req, res) {
    console.log("r",req.body)
    try {
        const Todo = await TodoService.createTodo({
            todo: req.body.todo,
            completed: req.body.completed,
            userid: req.body.userid
        });
        SuccessResponse.data = Todo;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}


/**
 * POST : /Todos
 * req-body {}
 */
async function getTodos(req, res) {
    try {
        const Todos = await TodoService.getTodos();
        SuccessResponse.data = Todos;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 * POST : /Todos/:id 
 * req-body {}
 */
async function getTodo(req, res) {
    try {
        const Todos = await TodoService.getTodo(req.params.id);
        SuccessResponse.data = Todos;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 * DELETE : /Todos/:id
 * req-body {}
 */
async function destroyTodo(req, res) {
    try {
        const Todos = await TodoService.destroyTodo(req.params.id);
        SuccessResponse.data = Todos;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports = {
    createTodo,
    getTodos,
    getTodo,
    destroyTodo
}