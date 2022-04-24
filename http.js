const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 5000

const server = http.createServer((req, res) => {
    if (req.url === "/home"){
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        const data = fs.readFileSync('./TaskTwo/home.html', 'utf-8')
        res.write(data)
        res.end()
    } else if (req.url === "/about"){
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        const data = fs.readFileSync('./TaskTwo/about.html', 'utf-8')
        res.write(data)
        res.end()
    } else if (req.url === "/contact"){
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        const data = fs.readFileSync('./TaskTwo/contact.html', 'utf-8')
        res.write(data)
        res.end()
    } else {
        req.url === "/home"
        res.writeHead(302, {'Location': '/home'})
        res.end()
    }
})

server.listen(port, ()=>{
    console.log(`server is listening on ${port}`)
})