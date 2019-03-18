const express = require ('express');
const bodyParser = require ('body-parser');
const chalk = require('chalk');

const confRoutes = require('./routes/confRoutes');
const app = express();

//this is to parse json coming from the client
app.use(bodyParser.json());

//header middleware to disable CORS restrictions -wildcard is for any domain req.

// app.use((req, res, next)=> {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });





app.use(confRoutes);



const PORT = process.env.PORT || 8080;

// app.listen(8080);



app.listen(PORT,      
    console.log(chalk.bgGreen.black(`  Conference API server now running → PORT ${PORT}  `)));