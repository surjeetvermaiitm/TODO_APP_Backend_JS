const express = require('express');

const { TodoController } = require('../../controllers');
const { TodoMiddlewares } = require('../../middlewares');

const router = express.Router();

console.log("hello");
// /api/v1/Todos POST
router.post('/', 
        TodoMiddlewares.validateCreateRequest,
        TodoController.createTodo);

// /api/v1/Todos GET
router.get('/', 
        TodoController.getTodos);

// /api/v1/Todos/:id GET
router.get('/:id', 
        TodoController.getTodo);

// /api/v1/Todos/:id DELETE
router.delete('/:id', 
        TodoController.destroyTodo);

module.exports = router;