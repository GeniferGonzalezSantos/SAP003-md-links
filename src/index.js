function mdLink() {
    const fs = require('fs');

    return new Promise((resolve,reject) => {
    fs.readFile('./README.md', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            const regex = /\[([^\s].+?)\]\((http[s]?:\/\/[^\)]*)\)/gm;
            const str = data.toString();
            const array = [];
            let m;

            while ((m = regex.exec(str)) !== null) {
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
             array.push({text: m[1], link: m[2] });
             console.log(array);
              
             resolve (regex);
            }
        }
    });
});
}

/* module.export = mdLink; */

mdLink();