const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home World Loick</h2>");
    res.end()
})

server.listen(4000)