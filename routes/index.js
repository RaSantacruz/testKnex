const express = require('express');
const usersRouter = require('./users');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/users', usersRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});