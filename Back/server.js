require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnection');
const PORT = process.env.PORT || 3500;

connectDB();


//Some CORS credentials check issues
app.use(credentials)

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//cookies
app.use(cookieParser());

// routes
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));



app.use(verifyJWT);

app.all('*', (req, res) => {
    res.status(404);
});


mongoose.connection.once('open', () => {
    console.log('Connected to db');
    app.listen(PORT, () =>
        console.log(`Server running on port ${PORT}`));
})
