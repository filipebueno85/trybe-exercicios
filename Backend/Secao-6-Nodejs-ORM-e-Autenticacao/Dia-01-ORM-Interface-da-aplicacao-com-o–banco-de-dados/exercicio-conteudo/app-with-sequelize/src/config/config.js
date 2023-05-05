// // src/config/config.js

// module.exports = {
//   "development": {
//     "username": process.env.MYSQL_USER,
//     "password": process.env.MYSQL_PASSWORD,
//     "database": process.env.DB_NAME,
//     "host": process.env.DB_HOST,
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": process.env.MYSQL_USER,
//     "password": process.env.MYSQL_PASSWORD,
//     "database": "database_test",
//     "host": process.env.MYSQL_HOST,
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": process.env.MYSQL_USER,
//     "password": process.env.MYSQL_PASSWORD,
//     "database": "database_production",
//     "host": process.env.MYSQL_HOST,
//     "dialect": "mysql"
//   }
// }


const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};