const express = require('express');
const http = require('http');
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

app.use('/api', routes);
app.get('/',(req,res) => {
    return res.send('<h1> You are welcome to my page </h1>');
});

server.listen(8081,()=>{
    console.log('we are listening to port localhost');
});
