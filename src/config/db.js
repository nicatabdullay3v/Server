const mongoose = require('mongoose')
require('dotenv').config()
const dbConnect = async() =>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("connected");
    }).catch((err)=>{
        console.log(err);
    })
}
module.exports = dbConnect