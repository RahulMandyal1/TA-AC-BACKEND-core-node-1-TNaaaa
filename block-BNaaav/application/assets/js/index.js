let http = require("http");
let fs = require("fs");
let server = http.createServer(handleRequest);

function handleRequest(request, response) {
  console.log(request.method, request.url);
  if (request.method === "GET" && request.url === "/index.html") {
    fs.createReadStream("./index.html").pipe(response);
  }
  if (request.method === "GET" && request.url === "about-us.html") {
    response.setHeader("Content-Type", "text/html");
    fs.createReadStream("./about-us.html").pipe(response);
  }
  if (request.method === "GET" && request.url === "services.html") {
    response.setHeader("Content-Type", "text/html");
    fs.createReadStream("./services.html").pipe(response);
  }
  if (request.method === "GET" && request.url === "/cases.html") {
    response.setHeader("Content-Type", "text/html");
    fs.createReadStream("./cases.html").pipe(response);
  }
  if (request.method === "GET" && request.url === "/blog.html") {
    response.setHeader("Content-Type", "text/html");
    fs.createReadStream("../blog.html").pipe(response);
  }
  if (request.method === "GET" && request.url === "/contact.html") {
    response.setHeader("Content-Type", "text/html");
    fs.createReadStream("./contact.html").pipe(response);
  }
  if (request.url.split(".").pop() === "css") {
    // set header for css file
    response.setHeader("Content-Type", "text/css");
    // read css file and send it in response
    fs.readFile("./assets/stylesheets/" + request.url, (err, content) => {
      if (err) return console.log(err);
      response.end(content);
    });
  }
  if (request.methods === "GET" && request.url === "/media") {
    response.setHeader("Content-Type", "media/jpeg");
    fs.readFile(".assets/media" + request.url, (err, content) => {
      if (err) return console.log(err);
      response.end(content);
    });
  }
}
server.listen(3000, "localhost", () => {
  console.log("server is running at 3000 port");
});
