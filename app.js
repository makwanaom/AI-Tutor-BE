const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors  = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const prisma = new PrismaClient();
const app = express();

const getAllUsers=require('./Controllers/getAllUsers.js')
const postUser= require('./Controllers/postUser.js')
const getHome = require('./Controllers/getHome.js')
const sendLayer3 = require('./Controllers/layer3.js')
const sendLayer2 = require('./Controllers/layer2.js')
const sendLayer1 = require('./Controllers/layer1.js')
const sendLayer0 = require('./Controllers/layer0.js')
const getQuiz = require('./Controllers/guiz.js')

const postMessage = require("./Controllers/postMessage.js");
app.use(express.json());
app.use(cors());

app.use(morgan('combined'))
app.get('/users', getAllUsers);
app.post('/users',postUser);
app.get('/',getHome);
app.post('/layer3',sendLayer3); //need to add a session auth here
app.post('/layer2',sendLayer2); //need to add a session auth here
app.post('/layer1',sendLayer1);
app.post('/layer0',sendLayer0);
app.post("/send", postMessage); //need to add a session auth here
app.post('/quiz',getQuiz);
// console.log(explainTopic);
module.exports = app;
