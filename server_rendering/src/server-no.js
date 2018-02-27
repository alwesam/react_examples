//https://stackoverflow.com/questions/39436322/node-js-syntaxerror-unexpected-token-import
//import path    from 'path';
//import express from 'express';

const path    = require("path");
const express = require('express');

const port       = 3003;
const server     = express();

const staticPath = path.resolve('.', 'public');
const scriptPath = path.resolve('.', 'dist');

server.use('/dist', express.static(scriptPath));

server.get("/", function(req,res) {
  res.sendFile(path.join(staticPath + "/index.html"));
});

server.listen(port, function() {
  console.log(`Serving at http://localhost:${port}`);
});
