const express = require('express');
const app =  express();
const expressLayouts = require('express-ejs-layouts')
const db = require('./config/mongoose'); // Import the Mongoose configuration


app.use(express.urlencoded());

app.use(express.static('./assets'))
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Set up view engine
app.set('view engine', 'ejs');
app.set('views' ,'./views')


//connect to router
app.use('/', require('./routes/index'));

// Setup Port for server
const port = 8000;
app.listen(port,(err)=>{
    if(err){
        console.log('Error in running the server');
    }
    console.log(`Server is running on port ${port}`);
})
