const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'Fantasy11',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to Fantasy11 database'))
.catch(err => console.error('Error connecting to the database', err));
