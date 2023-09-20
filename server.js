const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8001;
const { MongoClient } = require('mongodb'); // Import MongoClient from mongodb module
require('dotenv').config();

app.use(cors());
app.use(express.json());

let db; // Declare db variable outside the connection

const dbconnectionStr = process.env.DB_STRING;
const dbName = 'aliens-api';

MongoClient.connect(dbconnectionStr)
  .then(client => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName); // Assign the database connection to the db variable

    // Move these routes inside the .then block to ensure db is defined
    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html');
    });

    app.get('/api/:alienName', (req, res) => {
      const aliensName = req.params.alienName.toLowerCase();
      const infoCollection = db.collection('alien-info'); // Define collection here
      infoCollection
        .find({ name: aliensName })
        .toArray()
        .then(results => {
          console.log(results);
          res.json(results[0]);
        })
        .catch(err => console.error(err));
    });

    app.listen(process.env.PORT || PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error(err));
