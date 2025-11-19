const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Route de base pour vérifier que ça marche
app.get('/health', (req, res) => {
    res.json({ status: 'SmartMeal API Running' });
});

app.listen(PORT, () => {
    console.log(`SmartMeal API listening on port ${PORT}`);
});