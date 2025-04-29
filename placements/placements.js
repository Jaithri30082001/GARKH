console.log("placements page testing");
const fs = require("fs");
const http = require("http");
const url = require("url");

//====================================================================================//
// overview
const overview_html = fs.readFileSync(`${__dirname}/index.html`, "utf-8");
const overview_css = fs.readFileSync(`${__dirname}/style.css`, "utf-8");

console.log(overview_html, overview_css);
