const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>HELLO from a simple web </h1>');
});

app.listen(PORT, () => {
    console.log(`Running on  http://localhost:${PORT}`);
});