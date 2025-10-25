
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
};

// Connect to MySQL server to create the database if it doesn't exist
const initialConnection = mysql.createConnection(dbConfig);

initialConnection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL server');
  initialConnection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE}`, (err, result) => {
    if (err) {
      console.error('Error creating database:', err);
      initialConnection.end();
      return;
    }
    console.log('Database created or already exists');
    initialConnection.end();

    const db = mysql.createConnection({ ...dbConfig, database: process.env.DB_DATABASE });

    db.connect((err) => {
      if (err) {
        console.error('Error connecting to database:', err);
        return;
      }
      console.log('Connected to MySQL database');
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS contacts (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `;
      db.query(createTableQuery, (err, result) => {
        if (err) {
          console.error('Error creating table:', err);
          return;
        }
        console.log('Contacts table created or already exists');
      });
    });

    app.get('/api/maps-api-key', (req, res) => {
  res.json({ apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY });
});

    app.post('/api/contact', (req, res) => {
      const { name, email, message } = req.body;
      const insertQuery = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
      const db = mysql.createConnection({ ...dbConfig, database: process.env.DB_DATABASE });
      db.query(insertQuery, [name, email, message], (err, result) => {
        if (err) {
          console.error('Error inserting data:', err);
          res.status(500).send('Error saving contact information');
          return;
        }
        res.status(200).send('Contact information saved successfully');
      });
    });

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
});
