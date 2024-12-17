import defineAssociations from "./associations";

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("CookingApp", "postgres", "", {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});


export default sequelize;
