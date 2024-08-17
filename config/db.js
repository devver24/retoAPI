const {Sequelize} = require('sequelize')
require('dotenv').config(); //paquete para los paquetes .env para entrar
// const sequelize = new Sequelize('newdb', 'root' ,'',{
//     host: 'localhost',
//     dialect: 'mysql'
// })


const sequelize = new Sequelize(process.env.DATABASE_URL, {   //'newdb', 'root' ,'',
    dialect: 'mysql',
    dialectOptions:{
        connectTimeout: 60000
    }
})


const connectDB = async() =>{
    try{
        await sequelize.authenticate()
        console.log ('Connected to database')
    } catch(err){
        console.error('error connecting to database', err)
    }
}

module.exports = {sequelize,connectDB}

