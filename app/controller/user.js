const Controller = require('egg').Controller;

class UserController extends Controller {
  async registerUser() {
    const result = await this.ctx.service.user.registerUser();
    this.ctx.body = result;
  }

  async login() {
    const result = await this.ctx.service.user.login();
    this.ctx.body = result;
  }
}

module.exports = UserController;
