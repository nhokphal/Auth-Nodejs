const http = require('http')

const server = http.createServer((req, res) =>{
    var body = "hello, world";

    res.writeHead(200, {
        'Content-Length': body.length,
        'Content-Type': 'text/plain'
    })
    res.end(body)
})

const PORT = 3000;
server.listen(PORT, () =>
{
    console.log(`listening to port ${PORT}`)
})