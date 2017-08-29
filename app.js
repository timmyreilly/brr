require("dotenv").config();

const path = require("path");
const Web3 = require("web3");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const server = require("http").createServer(app);