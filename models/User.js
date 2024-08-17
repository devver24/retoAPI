const {Sequelize, DataTypes} = require('sequelize')
const {sequelize} = require('../config/db')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        //allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,        
    },

    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,        
    },

    genero: {
        type: DataTypes.ENUM('Masculino', 'Femenino', 'No responde'),
        allowNull: false
    },

    fecha_nacimiento:{
        type: DataTypes.DATEONLY,
        allowNull: false,
    },

    telefono:{
        type: DataTypes.STRING,
        allowNull: false,        
    },

    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_registro : {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },    
},
{
    timestamps: false
});

module.exports= User;