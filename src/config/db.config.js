
const dotenv = require('dotenv');

dotenv.config();

// console.log("p",process.env)

module.exports= {
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: process.env.POSTGRES_PORT 
}