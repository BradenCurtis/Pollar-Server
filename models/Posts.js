const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {

    const Posts = Sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        option1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        option2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Posts.associate = (models) => {

        Posts.hasMany(models.Vote1, {
            onDelete: "cascade"
        });

        Posts.hasMany(models.Vote2, {
            onDelete: "cascade"
        });

    }

    return Posts;
}