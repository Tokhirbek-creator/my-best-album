require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const upload = require('./middleware/upload');
const { Photo, User } = require('./db/models');

const { PORT } = process.env;

const app = express();

app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(process.env.PWD, 'public')));

app.get('/photos', async (req, res) => {
  const photos = await Photo.findAll();
  res.json({
    content: photos,
  });
});

app.delete('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await Photo.destroy({ where: { id } });
  const updatePhotos = await Photo.findAll();
  res.json({
    content: updatePhotos,
  });
});

app.get('/me', async (req, res) => {
  const me = await User.findOne({ where: { id: 1 } });
  res.json(me);
});

app.post('/upload', upload.single('file'), async (req, res) => {
  console.log(req.file);
  try {
    const post = await Photo.create({
      title: req.body.title,
      img: `/img/${req.file.originalname}`,
      user_id: '1',
    });
    res.json(post);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log('Server up...');
});
