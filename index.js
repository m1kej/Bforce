const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
    console.log(req.headers['user-agent'])
    console.log(req.headers['accept-language'])
    console.log((res.ip = (req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress).split(',').reverse()[0]))
})

app.use(express.static(path.join(__dirname)));
app.listen(PORT, () => {
    console.log(`Running on port ${port}`)
})