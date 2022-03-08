let http = require("http");
let fs = require("fs");
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if ((req.method === "GET") & (req.url === "/")) {
    res.end("Welcome to HomePage");
  }
  if (req.method === "GET" && req.url === "/node") {
    fs.readFile("./node.html", (err, content) => {
      if (err) {
        console.log(err);
      }
      console.log(content);
    });
  }
  if (req.method === "GET" && req.url === "/stream") {
    fs.createReadStream("./stream.html").pipe(res);
  } 
  else {
    res.end("404 error");
  }
}
// listening the  Request
server.listen(5555, "localhost", () => {
  console.log("Listening on  the port 5555");
});
