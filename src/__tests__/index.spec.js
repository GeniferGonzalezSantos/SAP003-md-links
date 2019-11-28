const mdLinks = require("../index.js");

const arrayTest = [
  { text: "Markdown", href: "https://pt.wikipedia.org/wiki/Markdown" },
  { text: "Node.js", href: "https://nodejs.org/" },
  { text: "md-links", href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg" }
];

describe("mdLinks", () => {
  it("it is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it("the data is peanut butter", (done) => {
    mdLinks("./src/__tests__/text.md")
      .then(array => {
        expect(array).toEqual(arrayTest);
        done();
      });
  });
  it("erro", (done) => {
    mdLinks("./src/__tests__/tex.md")
      .catch(array => {
        expect(array).toEqual("Error: ENOENT: no such file or directory, open './src/__tests__/tex.md'");
        done();

      });
  });
});
