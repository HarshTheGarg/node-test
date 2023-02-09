#!/usr/bin/env node

const http = require("http");
const url = require("url");
const fs = require("fs/promises");

http
  .createServer(async (req, res) => {
    var q = url.parse(req.url, true).pathname;

    try {
      if (q == "/") {
        const data = await fs.readFile("./index.html");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } else if (q == "/about") {
        const data = await fs.readFile("./about.html");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } else if (q == "/contact-me") {
        const data = await fs.readFile("./contact-me.html");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } else {
        const data = await fs.readFile("./404.html");
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(data);
      }
    } catch (err) {
      console.log("Error!");
      console.log(err);
      res.writeHead(404, { "Content-Type": "text/html" });
      const data = await fs.readFile("./404.html");
      res.end(data);
    }
  })
  .listen(8080, () => {
    console.log("Listening on port 8080...");
  });
