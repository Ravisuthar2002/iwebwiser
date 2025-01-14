const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const HeaderContent = sequelize.define('HeaderContent', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subtitle: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    navigationMenus: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: []
    },
    logos: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: []
    },
    text: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    body: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    label: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    href: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    featuredMedia: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    section: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    page: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, {
    timestamps: true,
    paranoid: true
});

module.exports = HeaderContent;
