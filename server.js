const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  try {
    // console.loge()  exemple d'erreur 500
    if (req.url == "/") {
      if (req.method == "GET") {
        const chemainAbsoluIndexHTml = path.join("./public/pages/index.html");
        const letureHtml = fs.readFileSync(chemainAbsoluIndexHTml, "utf-8");
        res.writeHead(200, { "content-type": "text/html" });
        res.write(letureHtml);
      } else {
        const chemainAbsolu401HTML = path.join("./public/pages/401.html");
        const letureHtml = fs.readFileSync(chemainAbsolu401HTML, "utf-8");
        res.writeHead(401, { "content-type": "text/html" });
        res.write(letureHtml);
      }
    } else if (req.url == "/public/images/symfony.jpg") {
      const chemainAbsoluImageHTML = path.join("./public/images/symfony.jpg");
      const letureHtml = fs.readFileSync(chemainAbsoluImageHTML);
      res.writeHead(200, { "content-type": "image/jpg" });
      res.write(letureHtml);
    } else if (req.url == "/public/css/style.css") {
        if (req.method == "GET") {
            const chemainAbsoluCssHTML = path.join("./public/css/style.css");
            const letureHtml = fs.readFileSync(chemainAbsoluCssHTML);
            res.writeHead(200, { "content-type": "text/css" });
            res.write(letureHtml);
        }
    } else {
      const chemainAbsolu404HTML = path.join("./public/pages/404.html");
      const letureHtml = fs.readFileSync(chemainAbsolu404HTML, "utf-8");
      res.writeHead(404, { "content-type": "text/html" });
      res.write(letureHtml);
    }
    res.end();
  } catch (err) {
    const chemainAbsolu500HTML = path.join("./public/pages/404.html");
    const letureHtml = fs.readFileSync(chemainAbsolu500HTML, "utf-8");
    res.writeHead(500, { "content-type": "text/html" });
    res.write(letureHtml);
    res.end();
  }
});

server.listen(4000);
