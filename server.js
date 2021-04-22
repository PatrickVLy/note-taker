const express = require("express");
const path = require("path");
const fs = require("fs");
const mainDir = path.join(__dirname, "/public");
const port = 3000;
const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

