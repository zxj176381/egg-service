const Service = require('egg').Service;

class UserService extends Service {
  async registerUser() {
    const { ctx, app } = this;
    const { body } = ctx.request;
    const { mysql, successMsg, errorMsg, getCurrentTimestamp } = app;
    // 查询是否存在此用户
    const isExist = await mysql.get('er_user', {
      email: body.email,
    });
    if (isExist) {
      return errorMsg('', '此用户已存在！');
    } else {
      const data = {
        ...body,
        source: 1,
        create_at: getCurrentTimestamp(),
      };
      await mysql.insert('er_user', data);
      return successMsg('', '账号注册成功！');
    }
  }

  async login() {
    const { ctx, app } = this;
    const { body } = ctx.request;
    const { mysql, successMsg, errorMsg, getCurrentTimestamp, jwt } = app;
    //
    const isExist = await mysql.get('er_user', {
      email: body.email,
    });
    if (isExist) {
      if (isExist.password !== body.password) {
        return errorMsg('', '密码输入错误！');
      }
      let token = jwt.sign(
        {
          email: body.email,
        },
        app.config.jwt.secret
      );
      token = token.split('.')[0];
      mysql.update('er_user', { token }, { where: { uid: isExist.uid } });
      isExist.token = token;
      delete isExist.email;
      delete isExist.password;
      return successMsg(isExist, '登录成功！');
    } else {
      return errorMsg('', '此用户不存在！');
    }
  }
}

module.exports = UserService;
