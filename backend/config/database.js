const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://santhoshgunaseelan8:Fantasy@impact.r5rn2hh.mongodb.net/?retryWrites=true&w=majority&appName=Impact', {
    dbName: 'Fantasy11',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to Fantasy11 database'))
.catch(err => console.error('Error connecting to the database', err));
