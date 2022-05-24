const express = require('express')
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('DB Connected!'))
.catch(err => {console.log('DB connection failed! Error: ', err)})

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`😎✌️ Connected on localhost:${PORT}`));