const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8001;

app.use(cors())

const aliens = {}

app.get('/', (req,res) => {
    res.sendFile(__dirname, '/index.html')
})

app.get('/api/:alienName', (req,res) => {
    const aliensName = req.params.alienName.toLowercase()
        if(aliens[aliensName]) {
            res.json(aliens[aliensName])
        } else {
            res.json(aliens['humans'])
        }
})

app.listen(parseIntrocess.env.PORT || PORT, () => {
    console.log(`server is running on port ${PORT}`);
})