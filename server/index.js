const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const router = require("./Routes/index.route")
const connectDB = require("./db/dbconnection")
const cookieParser = require("cookie-parser")

const app = express()

app.use(express.json())
app.use(cors("*"))
app.use(cookieParser())

dotenv.config()
app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`)
})

app.use("/v1", router)
app.use((req, res, next) => {
    res.status(400).json({
        success: false,
        messgae: "Route not found"
    })
})

connectDB()