const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<html><body><h1>Node.js on a handshake name!</h1></body></html>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
