const http = require("http");
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
try{

 // console.loge()  exemple d'erreur 500
  if (req.url == "/") {
    if (req.method == "GET") {
        const chemainAbsoluIndexHTml = path.join('./public/pages/index.html');
        const letureHtml = fs.readFileSync(chemainAbsoluIndexHTml, "utf-8");
        res.writeHead(200, { "content-type": "text/html" });
        res.write(letureHtml)
        
    }else{
        const chemainAbsolu401HTML = path.join('./public/pages/401.html')
        const letureHtml = fs.readFileSync(chemainAbsolu401HTML, "utf-8")
        res.writeHead(401, { "content-type": "text/html" });
        res.write(letureHtml); 
    }
  }else {
        const chemainAbsolu404HTML = path.join('./public/pages/404.html')
        const letureHtml = fs.readFileSync(chemainAbsolu404HTML, "utf-8")
        res.writeHead(404, { "content-type": "text/html" });
        res.write(letureHtml);
      
    }   
res.end()

}catch(err){
    res.writeHead(500, { "content-type": "text/html" });
    res.write("<h1> 500 Erreur Interne au Serveur </h1>");
    res.end();
}
});

server.listen(4000);
