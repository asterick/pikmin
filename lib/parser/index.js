const fs = require("fs");
const path = require("path");
const pegjs = require("pegjs");

const peg = fs.readFileSync(path.join(__dirname, "grammar.pegjs"), 'utf-8');

module.exports = pegjs.generate(peg, { cache: true });
