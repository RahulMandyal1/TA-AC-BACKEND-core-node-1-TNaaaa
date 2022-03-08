let http = require("http");
let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  console.log(req.body);
  if (req.method === "GET" && req.url === "/") {
    res.setHeader("Content-Type", "text/plain");
    res.write("welcome to  Home page  ");
    res.end();
  }
  if (req.method === "GET" && req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h2>this is all about NodeJS</h2>");
    res.end();
  }
  if (req.method === "POST" && req.url === "/about") {
    res.setHeader("Content-Type", "application/json");
    res.write('{"message": "this is a post request"}');
    res.end();
  } else {
    res.end("404 Error");
  }
}

server.listen(5000, "localhost", () => {
  console.log("Listening on the port 5000");
});
