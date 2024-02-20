const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {

    const Users = Sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Users.associate = (models) => {

        Users.hasMany(models.Vote1, {
            onDelete: "cascade"
        });

        Users.hasMany(models.Vote2, {
            onDelete: "cascade"
        });

    }

    return Users;
}