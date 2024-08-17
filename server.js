const express = require("express")
const {connectDB}= require ('./config/db')
const bodyParser = require ('body-parser')
const cors = require ('cors')

const app = express()

//connectDB() 

app.use(cors())
app.use(bodyParser.json())

app.use('/api/auth', require('./routes/auth'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, async() =>{
    console.log(`Server is running on port ${PORT}`  )
    const {sequelize} = require('./config/db')
    try{
        await sequelize.sync()
        console.log('Database synced')
    } catch(err){
        console.error('Error base de datos', err)
    }

})