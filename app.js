const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use(shopRouter);
app.use('/admin', adminRouter);



app.listen(3000);