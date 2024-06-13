const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const { sequelize, Item } = require('./models/item');
const port = process.env.PORT;

app.use(bodyParser.json());

app.use(cors({
    origin: '*',
    methods: 'GET,PUT,POST',
    allowedHeaders: 'Content-Type,Authorization',
    optionsSuccessStatus: 204
}));
// Route to get all items
app.get('/items', async (req, res) => {
    try {
        const items = await Item.findAll();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while fetching items.' });
    }
});

// Route to create a new item
app.post('/items', async (req, res) => {
    const { name, category } = req.body;
    try {
        const newItem = await Item.create({ name, category });
        res.status(201).json(newItem);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'An error occurred while creating the item.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    sequelize.sync(); // Sync the database
});