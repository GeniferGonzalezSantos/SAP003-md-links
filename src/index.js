
const fs = require('fs');

function mdLinks(path) {

    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);
            } else {
                const regex = /\[([^\s].+?)\]\((http[s]?:\/\/[^\)]*)\)/gm;
                const str = data.toString();
                const array = [];
                let m;

                while ((m = regex.exec(str)) !== null) {
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }
                    array.push({ text: m[1], href: m[2] })

                }
                resolve(array);
            }
        });
    });
}


module.exports = mdLinks; 

