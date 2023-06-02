const mongoose = require("mongoose")

const connectDatabase = () => {
    mongoose.connect(process.env.DATABASE,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(() => {
        console.log("Database Connected")
    }).catch(() =>{
        console.log("Failed to connect")
    })
}

module.exports = connectDatabase