module.exports = (app) => {
  const { router } = app;
  router.get('/', 'home.findMenu');
  router.post('/add', 'home.newMenu');
};
