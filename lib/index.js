
const fs = require("fs");

function mdLinks(path) {

  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(`${err}`);
      } else {
        const regex = /\[([^\s].+?)\]\((http[s]?:\/\/[^)]*)\)/gm;
        const str = data.toString();
        const array = [];
        let m;

        while ((m = regex.exec(str)) !== null) {
          array.push({ text: m[1].substring(0, 50), href: m[2] });
          
        }
        resolve(array);
      }
    });
  });
}

module.exports = mdLinks;

