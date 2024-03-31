const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { ServerConfig } = require('./config');
const Logger =require("./config/logger-config")
const apiRoutes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    Logger.info("Successfully started the server!","root")
});
