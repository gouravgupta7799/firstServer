let http = require('http');
const server = http.createServer((req, res) => {
  const url = req.url
  if (url === '/') {
    console.log("Gourav Gupta")
    res.setHeader('content-type', 'text/html');
    res.write('<html>')
    res.write('<head><title>this is my first server</title></head>')
    res.write('<body><form action="/message" method="post"><input type ="text" name="message"><button type="submit">submit</button></input></form></body>')
    res.write('<h1>"Welcome to my Node Js project"</h1>')
    res.write('</html>')
    return res.end()
  }
  else if (url === '/home') {
    res.setHeader('content-type', 'text/html');
    res.write('<html>')
    res.write('<head><title>this is my first server</title></head>')
    res.write('<body><h1> "Welcome to my home"</h1></body > ')
    res.write('</html>')
    res.end()
  }
  else if (url === '/about') {
    res.setHeader('content-type', 'text/html');
    res.write('<html>')
    res.write('<head><title>this is my first server</title></head>')
    res.write('<body><h1>"Welcome to About Us page"</h1></body > ')
    res.write('</html>')
    res.end()
  }
  else if (url === '/node') {
    res.setHeader('content-type', 'text/html');
    res.write('<html>')
    res.write('<head><title>this is my first server</title></head>')
    res.write('<body><h1>"Welcome to my Node Js project"</h1></body > ')
    res.write('</html>')
    res.end()
  }
});

server.listen(4000);

