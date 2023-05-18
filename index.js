const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 5000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://AaooChale:DL11P7C5U22YSBzB@aaoochaledb.wxcfmcd.mongodb.net/login').then(() => {
      console.log("DB successfully connect")
}).catch((err) => {
      console.log(`DB not connect ${err}`)
})

app.use(require('./routes/route'));

app.listen(port, () => console.log(`server run on port ${port}`));
