const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    let filePath = req.url === "/"
        ? "./index.html"
        : "." + req.url;

    const ext = path.extname(filePath);

    const contentTypes = {
        ".html": "text/html",
        ".js": "text/javascript",
    };

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end("Not found");
            return;
        }

        res.writeHead(200, {
            "Content-Type": contentTypes[ext] || "text/plain"
        });

        res.end(content);
    });
});

server.listen(8080, () => {
    console.log("Game running at http://localhost:8080");
});
