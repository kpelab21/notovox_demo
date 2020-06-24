const express = require('express');

const app = express();

const port = process.env.port || 8081;

app.listen(port, () => console.log(`Server started on port ${port}`))