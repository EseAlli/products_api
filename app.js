const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product_routes');
const app = express();

const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://user:abcd1234@cluster0-b288h.azure.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 2453;

app.listen(port, () => {
    console.log(`Server is up and running on port number ${port}`);
});
