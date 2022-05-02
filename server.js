const http = require("http");
const { url, router } = require("inspector");

const server = http.createServer((req, res) => {

    console.log(req.method)

    if (req.url == "/"){
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>Home World Loick</h2>");
    }
  
    res.end()
})

server.listen(4000)