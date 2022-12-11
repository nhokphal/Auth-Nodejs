const express = require('express');
const app = express();
const route = express.Router();



route.get(('/about'), (req, res) => {
    // send 
    res.send('about');
});



route.get(('/project'), (req, res) => {
    // send 
    res.send('project');
});


module.exports = route;




