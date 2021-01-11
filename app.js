const http = require('http');
let express = require('express');
let app = express();
const bodyParser = require('body-parser');
let cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
let data = require('./controller/botmsg')
http.createServer(app).listen(6654, function(){
    console.log('Server Started')
})