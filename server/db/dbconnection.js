const { default: mongoose } = require("mongoose")

const connectDB = async () => {
    mongoose.connect("mongodb+srv://dhruviklathiya:AND0wnf0LWfZsY0K@d49cluster.kb3sp66.mongodb.net/BLOGAPP").then(
        console.log("Database connected successfully")
    ).catch((error) => console.log(error))
}

module.exports = connectDB