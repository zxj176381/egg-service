const mysql = {
  client: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'test',
  },
};

cors = {
  origin: '*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};

module.exports = {
  mysql,
  cors,
};
