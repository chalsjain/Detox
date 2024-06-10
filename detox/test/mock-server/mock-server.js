const express = require('express');
const bodyParser = require('body-parser');

class Mockserver {
  constructor() {
    this.app = express();
    this.server = null;
    this.port = process.env.PORT || 9001;
  }

  init() {
    this.app.use(bodyParser.urlencoded({extended: true}));
    this.app.use(bodyParser.json());

    const router = express.Router();

    router.get('/', (_, res) => {
      res.json({message: 'hello world!'});
    });

    router.get('/hello-world.html', (_, res) => {
      res.send('<html><body><h1>Hello World!</h1><input type="text" aria-label="input-box"></body></html>');
    });

    router.route('/delay/:delay')
          .get((req, res) => {
            console.log('Mock server', `GET delayed response, will reply in ${req.params.delay}ms`);
            setTimeout(() => {
              console.log('Mock server', `GET delayed response, responding now`);
              res.json({message: `Response was delayed by ${req.params.delay}ms`});
            }, req.params.delay);
          });

    this.app.use('/', router);

    this.server = this.app.listen(this.port);
    console.log('Mock server', `Listening on port ${this.port}`);
  }

  close() {
    return new Promise((resolve, reject) => {
      this.server.close(err => err ? reject(err) : resolve());
    });
  }
}

module.exports = Mockserver;
