const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod
    ? 'https://clagett-portfolio.herokuapp.com'
    : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://clagett-portfolio.herokuapp.com',
  'process.env.CLIENT_ID': 'RRm4SLoSX02c39rnZ74f7aFspn7fEL3I'
};
