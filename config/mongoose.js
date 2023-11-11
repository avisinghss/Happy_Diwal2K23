const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://anubhavsinghrr:XMeryuxnJSkWeHaA@cluster0.knx22rp.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Errot to connect to mongodb"));

db.once('open',()=>{
    console.log("Connected to Database:: MongoDB");
});

module.exports = db;