const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    if (req.method == "GET") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>Home World Loick</h2>");
    }else{
        res.writeHead(401, { "content-type": "text/html" });
        res.write("<h1>401 Méthode non authorisée</h2>"); 
    }
  }
});

server.listen(4000);
