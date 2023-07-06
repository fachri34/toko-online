const express = require("express")
const dotenv = require("dotenv")
const connectDatabase = require("./db/database")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const cors = require("cors")
const ErrorHandler = require('./middleware/error')

const user = require('./controller/user')
const shop = require('./controller/shop')
const product = require('./controller/product')
const event = require('./controller/event')
const couponCode = require('./controller/couponCode')
const conversation = require('./controller/conversation')
const order = require('./controller/order')
const payment = require('./controller/payment')
const message= require('./controller/message')
const withdraw= require('./controller/withdraw')


dotenv.config()
const app = express()
const port = process.env.PORT
const corsOptions = {
    origin: true,
    credentials: true
}

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use("/", express.static("uploads"))
app.use(ErrorHandler);

process.on("uncaughtException", (err) => {
    console.log(`Error:${err.message}`)
    console.log('shutting down the server for handling uncaught exception')
})

connectDatabase()

app.use('/api/v2/user', user)
app.use('/api/v2/shop', shop)
app.use('/api/v2/product', product)
app.use('/api/v2/event', event)
app.use('/api/v2/coupon', couponCode)
app.use('/api/v2/conversation', conversation)
app.use('/api/v2/order', order)
app.use('/api/v2/message', message)
app.use('/api/v2/withdraw', withdraw)
app.use('/api/v2/payment', payment)

app.listen(port, () => {
    console.log(`Server Running on port:`,port)
})

process.on("unhandleRejection", (err) => {
    console.log(`Shutting down the server for ${err.message}`)
    console.log(`Shutting down the server for unhandle promise rejection`)
    
    app.close(() => {
        process.exit(1)
    })
})

