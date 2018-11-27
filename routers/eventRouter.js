const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const {Events} = require('../models/eventModel')


router.get('/', (req, res) => {
  Events
    .find()
     .then(posts => {
            res.json(posts.map(post => post.serialize()));
        })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'something went horribly wrong' });
    });
});


router.get('/:id', (req, res) => {
  Events
    .find({"state": req.params.id})
     .then(posts => {
            res.json(posts.map(post => post.serialize()));
        })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'something went horribly wrong' });
    });
});



module.exports = router;