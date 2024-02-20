const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {

    const Vote1 = Sequelize.define("Vote1");

    return Vote1;
}