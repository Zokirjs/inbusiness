const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.bodyParser());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(process.env.PORT || 3000, () => {
    console.log('PORT: ' + process.env.PORT);
});