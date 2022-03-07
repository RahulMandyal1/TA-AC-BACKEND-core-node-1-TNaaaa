var url = require("url");
const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
console.log(parsedUrl);
// - console parsedUrl.pathname
console.log(parsedUrl.pathname);
// - console parsedUrl.query
console.log(parsedUrl.query);
// - console.log parsed Url host and protocol
console.log(parsedUrl.protocol);
console.log(parsedUrl.host);