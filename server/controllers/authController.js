const db = require('../db.js');

const authController = {

};

authController.signUp = async (req, res, next) => {
  try {
    const { username, password, github, email } = req.body;
  
    const text = 'INSERT INTO users (username, password, github, email) VALUES ($1, $2, $3, $4)';
    const values = [username, password, github, email];
  
    const results = await db.query(text, values);
    res.locals.results = results;
    return next();
  }
  catch (err) {
    return next(
      {
        log: 'Express error handler caught a middleware error in signUp',
        status: 500,
        message: { err: 'An error occured in signUp' }
      }
    )
  }
}

module.exports = authController;
