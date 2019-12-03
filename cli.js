#! /usr/bin/env node
const mdLinks = require("./lib/index.js");

mdLinks(process.argv[2])
  .then((result) => {
    result.map((item) => console.log(`Text:${item.text}\nhref:${item.href})`));

  })
  .catch(console.error);

