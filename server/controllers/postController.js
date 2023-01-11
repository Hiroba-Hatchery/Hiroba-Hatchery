  const db = require('../db.js');

const postController = {};

postController.newPost = async (req, res, next) => {
  try {
    const { _id, uid, content, url, likes, comments } = req.body;

    const insertCommand = `INSERT INTO post (_id, uid, content, url, likes, comments) VALUES (${_id}, ${uid}, ${content}, ${url}, ${likes}, ARRAY[${comments}])`;         

    // ARRAY[‘Item 1’, ‘Item 2’, ‘Item 3’]
    console.log(insertCommand);

    const results = await db.query(insertCommand);
    
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
}

postController.getPost = async (req, res, next) => {
  try {
    const getAllQuery = 'SELECT users.username, post.content, post.url, post.likes, post.comments FROM post INNER JOIN users ON post.uid = users.username';
    const results = await db.query(getAllQuery);
    // console.log(results.rows[0]);
    res.locals.results = results.rows[0];
    console.log(res.locals.results);
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

// async editPost(req, res, next) {
//   try {

//   } catch {
//     return next(
//       {
//         log: 'Express error handler caught a middleware error in newPost',
//         status: 500,
//         message: { err: 'An error occurred in newPost' }
//       }
//     )
//   }
// },

// async deletePost(req, res, next) {
//   try {

//   } catch {
//     return next(
//       {
//         log: 'Express error handler caught a middleware error in newPost',
//         status: 500,
//         message: { err: 'An error occurred in newPost' }
//       }
//     )
//   }
// }
module.exports = postController;

  // async addToCart(req, res, next) {
  //   try {
  //     const insertCommand = 'INSERT INTO ORDER_ITEM (_id, product_id, quantity) VALUES (' +
  //      req.body._id + ', ' + req.body.product_id + ', 1)';
  //     const addedRes = await db.query(insertCommand);
  //     res.locals.addedRes = addedRes;
  //     return next();
  //   } catch {
  //     return next(
  //       {
  //         log: 'Express error handler caught a middleware error in addToCart',
  //         status: 500,
  //         message: { err: 'An error occurred in addToCart' }
  //       }
  //     );
  //   }
  // }