const express = require('express');

const { yellowBright } = require('chalk');

const fs = require('fs');
const morgan = require('morgan');
const { join } = require('path');

const debug = require('debug')('app');

const app = express();

app.use(morgan('combined'));
app.get('/', (req, res) => {
  res.sendfile(join(__dirname, 'views/index.html'));
});
// const filePath = join(__dirname, 'views/index.html');

app.get('/readFile', (req, res) => {
  fs.readFile('C:/Users/vishalagarwal01/Documents/CAR_MAINTENANCE_BILL.xlsx', { encoding: 'utf-8' }, (err, data) => {
    if (!err) {
      res.send(`received data: ${data}`);
    } else {
      res.send(err);
    }
  });
});
app.listen(2000, () => {
  debug(`Listening on port ${yellowBright('2000')}`);
});
