// 1. create a basic server and listen on port 3000

let http = require("http");
let server = http.createServer(handleServer);
function handleServer(req, res) {
  console.log(req.headers);
  console.log(req.method, req.url);
  res.end("This is a response from the other side ");
}
// now listening for a request  on the 3000 port
server.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});
