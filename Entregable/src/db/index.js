const {Sequelize}= requiere('Sequelize');

const db = new Sequelize ({
dialect: "mysql",
host:"localhost",
port: "3306",
database:"tabla_productos",
username:"root",
password:"icaro",
});
module.exports = db;