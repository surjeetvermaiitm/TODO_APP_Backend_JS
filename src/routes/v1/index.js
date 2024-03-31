const express = require('express');

const { InfoController } = require('../../controllers');
const TodoRouter =require("./todo-routes")

const router = express.Router();

router.use('/todo',TodoRouter );

router.get('/info', InfoController.info);


module.exports = router;