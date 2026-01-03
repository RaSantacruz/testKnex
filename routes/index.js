const express = require('express');
const dotenv = require('dotenv');
const usersRouter = require('./users');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get(process.env.prefix +'/', (req, res) => {
    res.send('Hello World');
});
app.use(process.env.prefix +'/users', usersRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});