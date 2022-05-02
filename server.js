const http = require("http");
const { url, router } = require("inspector");

const server = http.createServer((req, res) => {
  try {
    // console.loge()  exemple d'erreur 500
    if (req.url == "/") {
      if (req.method == "GET") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>Home World Loick</h2>");
      } else {
        res.writeHead(401, { "content-type": "text/html" });
        res.write("<h1>401 Méthode non authorisée</h2>");
      }
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1> 404 Page Introuvable</h1>");
    }
    res.end();
  } catch (err) {
    res.writeHead(500, { "content-type": "text/html" });
    res.write("<h1> 500 Erreur Interne au Serveur </h1>");
    res.end();
  }
});

server.listen(4000);
