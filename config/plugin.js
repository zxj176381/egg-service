const path = require('path');

const mysql = {
  enable: true,
  package: 'egg-mysql',
};

const cors = {
  enable: true,
  package: 'egg-cors',
};

module.exports = {
  mysql,
  cors,
};
