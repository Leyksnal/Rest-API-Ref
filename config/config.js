require('dotenv').config()
const mongoose = require('mongoose')
const url = process.env.LOCAL_DB

// connect to database
mongoose.connect(url).then(()=>{
    console.log(`Connected to the Database`)
}).catch((error)=>{
    console.log(`The connection is wrong`)
})