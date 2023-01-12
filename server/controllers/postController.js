const db = require('../db.js');

const postController = {};

postController.newPost = async (req, res, next) => {
  try {
    console.log('req.body', req.body);
    const { post_id, uid, content, url } = req.body;

    const text = `INSERT INTO post (post_id, uid, content, url) VALUES ($1, $2, $3, $4)`;
    const values = [post_id, uid, content, url];

    console.log('text: ', text);
    console.log('values: ', values);

    const results = await db.query(text, values);
    console.log('Results: ', results);
    res.locals.results = results.rows[0];

    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught a middleware error in newPost',
      status: 500,
      message: { err: 'An error occured in newPost' },
    });
  }
};

postController.getAllPost = async (req, res, next) => {
  try {
    const getAllQuery = 'SELECT * FROM post';
    const results = await db.query(getAllQuery);
    // console.log(results.rows[0]);
    res.locals.results = results.rows[0];
    // console.log(res.locals.results);
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught a middleware error in getAllPost',
      status: 500,
      message: { err: 'An error occurred in getPost' },
    });
  }
};

postController.getUserPost = async (req, res, next) => {
  try {
    const { username } = req.params;
    const text = `SELECT users.$1, post.content, post.url, post.likes, post.comments FROM post INNER JOIN users ON post.uid = users.$1`;
    const values = [username];

    const results = await db.query(text, values);
    // console.log(results.rows[0]);
    res.locals.results = results.rows[0];
    // console.log(res.locals.results);
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught a middleware error in getUserPost',
      status: 500,
      message: { err: 'An error occurred in getPost' },
    });
  }
};

(postController.editPost = async (req, res, next) => {
  try {
    const { post_id } = req.params;
    const { content, url } = req.body;

    const text = `UPDATE post SET content = $1, url = $2 WHERE post_id = $3`;
    const values = [content, url, post_id];

    const results = await db.query(text, values);
    res.locals.results = results;
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught a middleware error in editPost',
      status: 500,
      message: { err: 'An error occurred in editPost' },
    });
  }
}),
  (postController.deletePost = async (req, res, next) => {
    try {
      const { post_id } = req.params;
      const text = `DELETE FROM post WHERE post_id = $1`;
      const values = [post_id];
      const results = await db.query(text, values);
      res.locals.results = results;
      return next();
    } catch {
      return next({
        log: 'Express error handler caught a middleware error in deletePost',
        status: 500,
        message: { err: 'An error occurred in deletePost' },
      });
    }
  });

postController.likePost = async (req, res, next) => {
  try {
    const { post_id } = req.params;
    const { likes } = req.body;

    const text = `UPDATE post SET likes = $2 WHERE post_id = $1`;
    const values = [post_id, likes];

    const results = await db.query(text, values);
    res.locals.results = results;

    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught a middleware error in likePost',
      status: 500,
      message: { err: 'An error occurred in likePost' },
    });
  }
};

postController.addComment = async (req, res, next) => {
  try {
    const { post_id } = req.params;
    const { newComment } = req.body;

    const text = `UPDATE post SET comments = array_append(comments, $2) WHERE post_id = $1`;
    const values = [post_id, newComment];

    const results = await db.query(text, values);
    res.locals.results = results;

    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught a middleware error in addComment',
      status: 500,
      message: { err: 'An error occurred in addComment' },
    });
  }
};

module.exports = postController;
