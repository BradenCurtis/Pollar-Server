const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {

    const Vote2 = Sequelize.define("Vote2");

    return Vote2;
}