const express = require('express');

const app = express();

const port = process.env.port || 8081;

app.get('/', function(req, res) {
    res.send('hello world');
  });

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});

