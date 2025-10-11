const { mongo } = require("mongoose");

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require('./app');

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB).then(() => {
    console.log('DB connection successful');
}).catch((err) => {
    console.log('DB connection error', err.message);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});