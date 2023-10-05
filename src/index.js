const express = require('express');
const app = express();
const morgan = require('morgan');

// settings

app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/api',require('./routes/index'));
app.use('/api',require('./routes/products'));
app.use('/api',require('./routes/users'));


// Starting the server
app.listen(app.get('port') , () => {
    console.log(`Server on port ${app.get('port')}`);
});