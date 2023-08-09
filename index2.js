// hola mundo con node sin express

const http = require('http');

const colors = require('colors');

// http.createServer(function(req,res){

//     res.writeHead(404,{'content-type': 'text/plain'})

//     res.write('hola mundo nodejs 2023 ') ;
//     res.end();

// }) .listen(3000);

const handleserver = function (req,res){
       res.writeHead(200,{'content-type': 'text/plain'});

       res.write('<h1>hola mundo nodejs 2023</h1> ') ;
       res.end();


}
const server =http.createServer(handleserver);
 
server.listen(3000,function(){
console.log('server on port 3000'.green) ;

});