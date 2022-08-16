require('dotenv').config();

const express = require('express');
const path = require('path');

const { PORT } = process.env;
const indexRouter = require('./routes/indexRouter');
const postRouter = require('./routes/photoRouter');

const app = express();

app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/post', postRouter);

app.listen(PORT, () => {
  console.log('Server up...');
});
