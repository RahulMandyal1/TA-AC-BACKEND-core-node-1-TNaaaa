let http  = require('http');
 let server = http.createServer(handleRequest);
//handling  the request  here .
function handleRequest(request , response){
    response.end('Response from the other side Means from the server side ');
}
//now listening the request on the port 4000
server.listen(4000 , "localhost" ,()=>{
    console.log('Listening on the port 4000');
});
