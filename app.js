/* eslint-disable @typescript-eslint/no-require-imports */
const http = require('http');
const next = require('next');

const port = parseInt(process.env.PORT || '3000', 10);
const dev = false;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer((req, res) => handle(req, res))
    .listen(port, '0.0.0.0', () => {
      console.log('Next.js running on port ' + port);
    });
});
