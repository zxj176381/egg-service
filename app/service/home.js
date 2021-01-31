const Service = require('egg').Service;

class HomeService extends Service {
  async findMenu() {
    const { mysql, successMsg } = this.app;
    let menuList = await mysql.select('er_menu', {
      where: {
        is_show: 1,
      },
    });
    menuList = menuList.sort((a, b) => b.sort - a.sort);
    if (!menuList) menuList = [];
    const result = successMsg(menuList, '导航菜单列表获取成功！');
    return result;
  }

  async newMenu() {
    const { mysql, successMsg, getCurrentTimestamp } = this.app;
    const menu = {
      name: '测试排序',
      is_show: 1,
      sort: 10,
      create_time: getCurrentTimestamp(),
      update_time: getCurrentTimestamp(),
    };
    await mysql.insert('er_menu', menu);
    const result = successMsg('', '添加菜单导航成功！');
    return result;
  }
}

module.exports = HomeService;
