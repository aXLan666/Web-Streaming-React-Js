import { Sequelize } from "sequelize";

const db = new Sequelize('percobaan', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

export default db; 