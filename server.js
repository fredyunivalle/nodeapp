const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple Web App</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #282c36;
                    color: #61dafb;
                    display: flex;
                    height: 100vh;
                    justify-content: center;
                    align-items: center;
                }

                h1 {
                    border: 3px solid #61dafb;
                    padding: 20px;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <h1>Hello !! from a simple web :) </h1>
        </body>
        </html>
    `);
});


app.listen(PORT, () => {
    console.log(`Running on  http://localhost:${PORT}`);
});