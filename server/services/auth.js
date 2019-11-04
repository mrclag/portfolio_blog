const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// Middleware
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    jwksUri: 'https://mrclag.auth0.com/.well-known/jwks.json'
  }),
  audience: 'RRm4SLoSX02c39rnZ74f7aFspn7fEL3I',
  issuer: 'https://mrclag.auth0.com/',
  algorithms: ['RS256']
});

exports.checkRole = role => (req, res, next) => {
  const user = req.user;

  if (user && user[process.env.NAMESPACE + '/role'] === role) {
    next();
  } else {
    return res.status(401).send({
      title: 'Not Authorized',
      detail: 'You are not authorized to access this data'
    });
  }
};
