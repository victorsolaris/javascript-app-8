const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT

const dbService = require('./dbService');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// create
app.post('/insert', (request, response) => {

});

// read

app.get('/getALL', (request, response) => {
    response.json({
        success: true
    })
})

// update

// delete


app.listen(port, () => console.log(`This app could be running.... who knows...

Listning on port ${port}`))
