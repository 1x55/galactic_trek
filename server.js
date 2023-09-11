const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8001;

app.use(cors())

const aliens = {}

app.get('/', (req,res) => {
    res.sendFile(__dirname, '/index.html')
})

app.get('/api/:alienName', (req,res) => {
    const aliensName = request.params.alienName.toLowercase()
})