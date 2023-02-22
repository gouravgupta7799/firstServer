let http = require('http');
let fs = require('fs');
let file = fs.readFileSync('message.txt');

const server = http.createServer((req, res) => {
  let method = req.method;
  const url = req.url;
  if (url === '/') {

    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>this is my first server</title></head>');
    res.write('<body><form action="/message" method="POST"><input type ="text" name="message"><button type="submit">send</button></input></form></body>')
    res.write('<h1>"Welcome to my Node Js project"</h1>');
    res.write('</html>');
    return res.end()
  }
  if (url === '/message' && method === 'POST') {
    let body = [];
    req.on('data', (chank) => {
      body.push(chank);
    });
    req.on('end', () => {
      let parsebody = Buffer.concat(body).toString();
      let mes = parsebody.split('=')[1];
      fs.writeFileSync('message.txt', mes, (err) => {
      });
      res.statusCode = 302;
      res.setHeader = ('location', '/');
      return res.end();
    });
  }

  // else if (url === '/home') {
  //   res.setHeader('content-type', 'text/html');
  //   res.write('<html>')
  //   res.write('<head><title>this is my first server</title></head>')
  //   res.write('<body><h1> "Welcome to my home"</h1></body > ')
  //   res.write('</html>')
  //   res.end()
  // }
  // else if (url === '/about') {
  //   res.setHeader('content-type', 'text/html');
  //   res.write('<html>')
  //   res.write('<head><title>this is my first server</title></head>')
  //   res.write('<body><h1>"Welcome to About Us page"</h1></body > ')
  //   res.write('</html>')
  //   res.end()
  // }
  // else if (url === '/node') {
  //   res.setHeader('content-type', 'text/html');
  //   res.write('<html>')
  //   res.write('<head><title>this is my first server</title></head>')
  //   res.write('<body><h1>"Welcome to my Node Js project"</h1></body > ')
  //   res.write('</html>')
  //   res.end()
  // }
});

server.listen(4000);

