const db = require('../db.js');

const postController = {};

postController.newPost = async (req, res, next) => {
  try{
    const { uid, post_id, content, url } = req.body;
  
    const text = `INSERT INTO post (uid, post_id, content, url) VALUES ($1, $2, $3, $4)`;
    const values = [uid, post_id, content, url];

    const results = await db.query(text, values);
    res.locals.results = results.rows[0];
    return next();
    
  } catch (err) {
    return next(
      {
        log: 'Express error handler caught a middleware error in newPost',
        status: 500,
        message: { err: 'An error occured in newPost' }
      }
    )
  }
}

postController.getPost = async (req, res, next) => {
  try {
    const getAllQuery = 'SELECT users.username, post.content, post.url, post.likes, post.comments FROM post INNER JOIN users ON post.uid = users.username';
    const results = await db.query(getAllQuery);
    // console.log(results.rows[0]);
    res.locals.results = results.rows[0];
    console.log(res.locals.results);
    return next();
  } catch (err) {
    return next(
      {
        log: 'Express error handler caught a middleware error in getPost',
        status: 500,
        message: { err: 'An error occurred in getPost' }
      }
    )
  }
}

postController.editPost = async (req, res, next) => {
  try {
    const { post_id } = req.params
    const { content, url } = req.body;

    const text = `UPDATE post SET content = $1, url = $2 WHERE post_id = $3`;
    const values = [content, url, post_id];
    
    const results = await db.query(text, values)
    res.locals.results = results;
    return next();
  } catch (err) {
    return next(
      {
        log: 'Express error handler caught a middleware error in newPost',
        status: 500,
        message: { err: 'An error occurred in newPost' }
      }
      )
    }
  },
  
  postController.deletePost = async (req, res, next) => {
  try {
    const { post_id } = req.params;
    const text = `DELETE FROM post WHERE post_id = $1`;
    const values = [post_id];
    const results = await db.query(text, values);
    res.locals.results = results;
    return next();
  } catch {
    return next(
      {
        log: 'Express error handler caught a middleware error in newPost',
        status: 500,
        message: { err: 'An error occurred in newPost' }
      }
    )
  }
}

postController.likePost = async (req, res, next) => {
  try{
    const { post_id } = req.params;
    const { likes } = req.body

    const text = `UPDATE `
  } catch (err) {
    return next(
      {
        log: 'Express error handler caught a middleware error in likePost',
        status: 500,
        message: { err: 'An error occurred in likePost' }
      }
    )
  }
}


module.exports = postController;