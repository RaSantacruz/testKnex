const express = require('express');
const router = express.Router();
const db = require('../db/db');
router.post('/create', async (req, res) => {
    const { name, email, password } = req.body;
    const [id] = await db('users').insert({ name, email, password });
    res.status(201).json({ id, name, email });
});
router.get('/getAll', async (req, res) => {
    const users = await db('users');
    res.json(users);
});
router.get('/getUserById/:id', async (req, res) => {
    const { id } = req.params;
    const user = await db('users').where('id', id).first();
    res.json(user);
});
module.exports = router;    