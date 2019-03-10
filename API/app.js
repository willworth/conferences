const express = require ('express');
const bodyParser = require ('body-parser');
const chalk = require('chalk');

const confRoutes = require('./routes/confRoutes');
const app = express();

//this is to parse json coming from the client
app.use(bodyParser.json());

app.use(confRoutes)



const PORT = process.env.PORT || 8080;

// app.listen(8080);



app.listen(PORT,      
    console.log(chalk.bgGreen.black(`  Conference API server now running → PORT ${PORT}  `)));