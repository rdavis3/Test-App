const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Handshake Info</title>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          header {
            background-color: black;
            color: white;
            text-align: center;
            padding: 10px 0;
            border-bottom: 3px solid white;
          }
          footer {
            background-color: black;
            color: white;
            text-align: center;
            padding: 20px 0;
            position: absolute;
            bottom: 0;
            width: 100%;
          }
          /* Additional CSS styles here */
        </style>
      </head>
      <body>
        <header>
          <h1>Welcome to Handshake Information Page</h1>
        </header>
        <p>Handshake is a decentralized, permissionless naming protocol...</p>
        <!-- More information about Handshake here -->
        <footer>
          <p>&copy; 2023 Handshake Info. An experimental page built with AI.</p>
          <!-- Additional footer content here -->
        </footer>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


