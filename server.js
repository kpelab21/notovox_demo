const express = require('express');

const app = express();

const port = process.env.port;

app.listen(port, () => console.log(`Server started on port ${port}`))