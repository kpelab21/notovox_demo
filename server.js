const express = require('express');

const app = express();

const port = process.env.port || 8081;

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});