const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Handshake Info</title>
        <!-- Add CSS here if needed -->
      </head>
      <body>
        <h1>Welcome to Handshake Information Page</h1>
        <p>Handshake is a decentralized, permissionless naming protocol...</p>
        <!-- More information about Handshake here -->
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

