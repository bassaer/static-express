import express from 'express';
import path from 'path';
import serveStatic from 'serve-static';

const app = express();

app.use(serveStatic(path.join(process.cwd(), 'public'), {
    setHeaders: (res, path) => {
        res.setHeader('Cache-Control', 'public, max-age=10');
    }
}));

app.use('/', (req, res, next) => {
    res.send(`
<!DOCTYPE html>
  <html>
    <head>
      <title>title</title>
      <link rel="stylesheet" type="text/css" href="/style.css">
    </head>
    <body>
      <h1 class="main">hello</h1>
    </body>
  <html>`);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('start static server ');
});
