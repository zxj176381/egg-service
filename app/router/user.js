module.exports = (app) => {
  const { router } = app;
  router.post('/register', 'user.registerUser');
  router.post('/login', 'user.login');
};
