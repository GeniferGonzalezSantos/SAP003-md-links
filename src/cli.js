#! /usr/bin/env node
const mdLinks = require("./index.js");

mdLinks(process.argv[2])
  .then((result) => {
    console.log(result);
    
  })
  .catch(console.error);

