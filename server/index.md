const express = require("express")
const dotenv = require("dotenv")
const router = require("./Routes/index.route")
const cors = require("cors")
const connectDB = require("./db/dbconnection")
// 6: configuring environment variables
dotenv.config()

// 1: Creating instance of express or initialising express in app variable
const app = express()
// 2: All IP can access our back-end || Mounting cors
app.use(cors("*"))
// 3: Front-end can pass JSON and back-end will be able to understand it || Mounting express.json()
app.use(express.json())

// 7: Starting back-end server on a specific port
app.listen(process.env.PORT, () => {
    console.log("Hello from server");
    console.log("Server is running on port:", process.env.PORT);
    console.log(`Server location is ==> http:localhost:${process.env.PORT}`);
})

// 4: Defining routes access point || Mounting routes specific path
app.use("/v1", router)
// 5: Defining what to respond if no routes found when user try to access || Mounting error route
app.use((req, res, next) => {
    res.status(400).json({
        message: "Route not found"
    })
})

// 8: Connecting Database for data interchange
connectDB()