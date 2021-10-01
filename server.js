const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));

//configuracao da view engine
server.set('view engine', 'njk');

//configuracao do nunjucks
nunjucks.configure('views', {
    express:server
})

server.get('/', function(req, res){
    return res.render('about');
})

server.get('/portfolio', function(req, res){
    return res.render('portfolio')
})

server.listen(5000, function(){
    console.log('server is running');
})
