const mongoose = require("mongoose")

const connectDB = () => {
    mongoose.connect("mongodb+srv://eshop:eshop2023@cluster0.rw3iqhn.mongodb.net/test", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log("MongoDB Connected Successfully")
    })
}

module.exports = connectDB