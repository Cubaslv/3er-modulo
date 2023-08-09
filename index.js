// const math =require('./math.js') ;
// ;
// console.log(math.divide(1,0));


// llamar modulo express 
const express = require ('express');

// llamar modulo colors
const colors =require('colors');

const server = express();

server.get('/', function (req, res) {
res.send('<h1>hola mundo con express y node</h1>');
res.removeHeader();

})

server.listen(3000,function(){
    console.log('server n port 3000'.red)

});