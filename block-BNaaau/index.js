// Q. Create a basic server using http's createServer
// - listen for request on port 5000
// - console request and response object
// - do a request using browser on `localhost:5000`
// - check out console for request and response object

let http = require("http");
let server = http.createServer(handleRequest);

function handleRequest(request, response) {
  console.log(request);
  console.log(response);
  response.end("welcome to homepage");
}
server.listen(5000, "localhost", () => {
  console.log(" server is listning at port 5000");
});

// // Q. create a node server
// //   - add listener on port 5100
// //   - respond with 'My first server in NodeJS' using response object

let http1 = require("http");
let server1 = http1.createServer(handleRequest1);

function handleRequest1(request, response) {
  response.end("My first server in the NodeJs");
}
server1.listen(5100, "localhost", () => {
  console.log(" server is listning at port 5100");
});

// Q. write code to create a node server
//   - add listener on port 5555
//   - console request headers
//   - respond with content of user-agent from request headers.

let http2 = require("http");
let server2 = http2.createServer(handleRequest2);

function handleRequest2(request, response) {
  let requestHeader = request.headers;
  console.log(requestHeader);
  console.log(requestHeader["user-agent"]);
  response.end("Solved third Question ");
}
server2.listen(5555, "localhost", () => {
  console.log(" server is listning at port 5555");
});

// Q. write code to create a node server
//   - add listener on port 5566
//   - console request url and request method
//   - return a text response with requested url and method

let http3 = require("http");
let server3 = http3.createServer(handleRequest3);

function handleRequest3(request, response) {
  console.log(request.method, request.url);
  response.setHeader("Content-Type", "text/plain");
  response.end(request.method, request.url);
}
server3.listen(5566, "localhost", () => {
  console.log(" server is listning at port 5566");
});

// Q. write code to create a node server
//   - add listener on port 7000
//   - also add a callback function to listener with a console `server listening on port 7000`
//   - return entire request headers in response.
let http4 = require("http");
let server4 = http4.createServer(handleRequest4);

function handleRequest4(request, response) {
  response.setHeader("Content-Type", "text/plain");
  let headerRes = JSON.stringify(request.headers);
  response.end(headerRes);
}
server4.listen(7000, "localhost", () => {
  console.log(" server is listning at port 7000");
});
// Q. create a server
//   - add a listener on port 3333
//   - set status code 202 in response using `res.statusCode`.

let http5 = require("http");
let server5 = http5.createServer(handleRequest5);

function handleRequest5(request, response) {
  response.statusCode = 202;
  response.end("added the status code 202");
}
server5.listen(3333, "localhost", () => {
  console.log(" server is listning at port 3333");
});

// Q. create a server
//   - add a listener on port 8000
//   - set appropriate header for html response using `res.setHeader`
//   - return an HTML response(`<h3>Welcome to altcampus</h3>`)

let http5 = require("http");
let server5 = http5.createServer(handleRequest5);

function handleRequest5(request, response) {
  response.setHeader("Content-Type", "text/html");
  response.end("<h3>Welcome to altcampus</h3>");
}
server5.listen(8000, "localhost", () => {
  console.log(" server is listning at port 8000");
});

// Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.

let http6 = require("http");
let server6 = http6.createServer(handleRequest6);

function handleRequest6(request, response) {
  response.writeHead(202, { "Content-Type": "text/html" });
  response.end("<h3>Welcome to altcampus</h3>");
}
server6.listen(8000, "localhost", () => {
  console.log(" server is listning at port 8000");
});

// Q. create a basic node server
//   - add a listener at port 8888
//   - add appropriate header for json response
//   - send json response({success: true, message: 'Welcome to Nodejs'})

let http7 = require("http");
let server7 = http7.createServer(handleRequest7);

function handleRequest7(request, response) {
  response.setHeader("Content-Type", "application/json");
  response.end("{success: true, message: 'Welcome to Nodejs'}");
}
server7.listen(8888, "localhost", () => {
  console.log(" server is listning at port 8888");
});

// Q. create a server
//   - add listener on port 5050
//   - use postman to do a POST request on index route
//   - console to check request method
//   - send HTML response i.e. `<h2>posted for first time</h2>`

let http8 = require("http");
let server8 = http8.createServer(handleRequest8);

function handleRequest8(request, response) {
  console.log(request.method);
  response.setHeader("Content-Type", "text/html");
  response.end("<h2>posted for first time</h2>");
}
server8.listen(5050, "localhost", () => {
  console.log(" server is listning at port 5050");
});

// Q. Handle 2 requests on same route with different method
//     1. GET on '/users' route where return a simple HTML form with name and email field
//     2. POST on '/users' route with a message 'Posted for the second time'.

let http9 = require("http");
let server9 = http9.createServer(handleRequest9);
let fs = require("fs");

function handleRequest9(request, response) {
  if (request.method === "GET" && request.url === "/users") {
    fs.createReadStream("./form.html").pipe(response);
  }
  if (request.method === "POST" && request.url === "/users") {
    response.end("Posted for the second time");
  } else {
    response.end("<h1>Welcome to Node js</h1>");
  }
}
server9.listen(9000, "localhost", () => {
  console.log(" server is listning at port 9000");
});

// Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

//   - parse the  request url using parse method from url module
//   - console pathname from parsed url in above step
//   - grab url using `req.url`
//   - differentiate between `req.url` and `parsedUrl.pathname`
//   - grab the email from query params
//   - return json response with email from query params

let http10 = require("http");
let url = require("url");
let server10 = http10.createServer(handleRequest10);
let fs = require("fs");

function handleRequest10(request, response) {
  let parsedUrl = url.parse(request.url);
  if (request.method === "GET" && parsedUrl.pathname === "/users") {
    response.setHeader("Content-Type", "application/json");
    response.end(parsedUrl.query);
  } else {
    response.end("This is the last question");
  }
}
server10.listen(20000, "localhost", () => {
  console.log(" server is listning at port 20000");
});
