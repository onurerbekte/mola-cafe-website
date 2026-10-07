const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const files = { '/': ['index.html', 'text/html'], '/index.html': ['index.html', 'text/html'], '/styles.css': ['styles.css', 'text/css'], '/app.js': ['app.js', 'text/javascript'] };
http.createServer((request, response) => {
  const file = files[request.url.split('?')[0]];
  if (!file) { response.writeHead(404); response.end('Not found'); return; }
  fs.readFile(path.join(__dirname, 'dist', file[0]), (error, content) => {
    if (error) { response.writeHead(500); response.end('Unable to read file'); return; }
    response.writeHead(200, { 'Content-Type': `${file[1]}; charset=utf-8` });
    response.end(content);
  });
}).listen(4173, '127.0.0.1', () => console.log('Local preview: http://127.0.0.1:4173'));
