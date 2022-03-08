
// 1. create a server on port 4444 and request from browser on `localhost:4444`
// 2. Add statusCode of 201 and headers to send html content to response
// 3. Do request on server using **different HTTP methods** using **Postman** and write code to check request methods for multiple requests.

let http = require('http');

let server  = http.createServer(handleRequest);

function handleRequest(req  , res){
    // res.statusCode = 201;
    // res.setHeader('Content-Type' , 'text/plain') ;
    console.log(req.method , req.url);
    res.writeHead(201 ,{'Content-Type' : 'text/plain'});
    res.end('Response from  the server end ');
}
// Now listening  the request on the 4444 port 
server.listen(4444 , 'localhost' , ()=>{
    console.log('listening  the request on the  4444 port');
})