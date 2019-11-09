const express = require('express');
const compression = require('compression');
const next = require('next');
const mongoose = require('mongoose');
const routes = require('../routes');
const path = require('path');

// SERVICE
const authService = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);
const config = require('./config');

const bodyParser = require('body-parser');

const portfolioRoutes = require('./routes/portfolio');
const blogRoutes = require('./routes/blog');

const robotsOptions = {
  root: path.join(__dirname, '../static'),
  headers: {
    'Content-Type': 'txt/plain;charset=UTF-8'
  }
};

mongoose
  .connect(config.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err));

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(compression());
    server.use(bodyParser.json());

    server.use('/api/v1/portfolios', portfolioRoutes);
    server.use('/api/v1/blogs', blogRoutes);

    server.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      next();
    });

    server.get('/robots.txt', (req, res) => {
      return res.status(200).sendFile('robots.txt', robotsOptions);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.use(function(err, req, res, next) {
      if (err.name === 'UnauthorizedError') {
        res
          .status(401)
          .send({ title: 'Unauthorized', detail: 'Unauthorized access' });
      }
    });

    const PORT = process.env.PORT || 3000;

    server.use(handle).listen(PORT, err => {
      if (err) throw err;
      console.log(`Ready on port ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
