const mongoose = require('mongoose');

const connectDB = () =>{
    const uri = `mongodb+srv://yuval_alkalay:1234@cluster0.78vvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    const options ={
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    mongoose.connect(uri,options);
};

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

module.exports = connectDB;