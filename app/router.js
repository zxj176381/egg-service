module.exports = (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.findMenu);
  router.get('/add', controller.home.newMenu);
};
