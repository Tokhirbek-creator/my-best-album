const router = require('express').Router();
const upload = require('../middleware/upload');
const { Post } = require('../db/models');

router.route('/')
  .post(upload.single('img'), async (req, res) => {
    const newPost = await Post.create(
      { ...req.body, img: req.file.filename, user_id: '1' },
    );
    res.json({ newPost });
  });

router.route('/:id')
  .delete(async (req, res) => {
    await Post.destroy({ where: { id: req.params.id } });
    res.sendStatus('200');
  })
  .put(async (req, res) => {
    const {
      title, body, img, id,
    } = req.body;
    try {
      await Post.update({ title, body, img }, { where: { id } });
    } catch (error) {
      console.log(error.message);
    }
    res.render('editPost');
  });

module.exports = router;
