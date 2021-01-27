const Controller = require('egg').Controller;

class HomeController extends Controller {
  async findMenu() {
    const menuList = await this.ctx.service.home.findMenu();
    this.ctx.body = menuList;
  }

  async newMenu() {
    const newMenu = await this.ctx.service.home.newMenu();
    this.ctx.body = newMenu;
  }
}

module.exports = HomeController;
