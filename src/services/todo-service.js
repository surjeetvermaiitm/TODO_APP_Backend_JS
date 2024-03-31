const {StatusCodes} = require('http-status-codes');

const { TodoRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');


const todoRepository = new TodoRepository();

async function createTodo(data) {
    // try {
        const Todo = await todoRepository.create(data);
        return Todo;
    // } catch(error) {
    //     if(error.name == 'SequelizeValidationError') {
    //         let explanation = [];
    //         error.errors.forEach((err) => {
    //             explanation.push(err.message);
    //         });
    //         throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    //     }
    //     throw new AppError('Cannot create a new Todo object', StatusCodes.INTERNAL_SERVER_ERROR);
    // }
}

async function getTodos() {
    try {
        const Todos = await todoRepository.getAll();
        return Todos;
    } catch(error) {
        throw new AppError('Cannot fetch data of all the Todos', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getTodo(id) {
    try {
        const Todo = await todoRepository.get(id);
        return Todo;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The Todo you requested is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of all the Todos', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyTodo(id) {
    try {
        const response = await todoRepository.destroy(id);
        return response;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The Todo you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of all the Todos', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
 
module.exports = {
    createTodo,
    getTodos,
    getTodo,
    destroyTodo
}