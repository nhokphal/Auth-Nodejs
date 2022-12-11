const http = require('http')
const express = require('express');
const app = express();
const route = require('./Routes/Route')

app.use('/', route)


const PORT = 3000;
app.listen(PORT, () =>
{
    console.log(`listening to port ${PORT}`)
})