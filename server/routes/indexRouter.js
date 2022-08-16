const router = require('express').Router();
const { Photo } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const postsOrigin = await Photo.findAll({ order: [['createdAt', 'DESC']], raw: true });
    res.render('index', { postsOrigin });
  });
