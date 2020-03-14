const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Page from NodeJS Server</title></head>');
    res.write('<body><h1>Hello from NodeJS Server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
