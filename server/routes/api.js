const express = require('express');

const authController = require('../controllers/authController.js')
const postController = require('../controllers/postController.js')

const router = express.Router();

// REQUIRE CONTROLLERS

router.post('/signup', authController.signUp, (req, res) => {
  return res.status(200).json(res.locals.results);
});

// router.post('/signin', authController.signIn, (req, res) => {
//   return res.status(200).json(res.locals.results);
// });

// router.post('/verify', authController.verifyUser, (req, res) => {
//   return res.status(200).json(res.locals.results);
// });

router.post('/post', postController.newPost, (req, res) => {
  return res.status(200).send(res.locals.results);
});

router.get('/feed', postController.getAllPost, (req, res) => {
  return res.status(200).json(res.locals.results);
});

router.get('/:username', postController.getUserPost, (req, res) => {
  return res.status(200).json(req.params.username);
});

router.put('/:post_id', postController.editPost, (req, res) => {
  return res.status(200).json(req.params.post_id);
});

router.delete('/:post_id', postController.deletePost, (req, res) => {
  return res.status(200).json(req.params.post_id);
});

router.put('/:')

module.exports = router;

// EXAMPLES
// router.delete('/users/:userId', (req, res) => {
//   const userIndex = getUserIndex(req.params.userId)

//   if (userIndex === -1) return res.status(404).json({})

//   users.splice(userIndex, 1)
//   res.json(users)
//  })

//  router.delete('/feed-monitor/:id', (req, res) => {
//   req.services.feedService.removeItem(req.params.id, ajaxUtil.getResponseFn(res));
//  });
