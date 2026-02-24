console.log("hola desde node");

const filesystem = require('fs');

filesystem.writeFileSync('hola.txt','hola desde node');

const arreglo = [5000,60,90,100,10,20,10000,0,120];
for (let item of arreglo){
    setTimeout(() =>{
        console.log(item);
    },item);
}

const http = require('http');

const server = http.createServer( (request, response) => {
   // console.log(request);
    console.log(request.url);
   // console.log(response);
    //response.setHeader('Content-Type','text/html');
    //response.write("");
    
    response.end();

});
server.listen(3000);