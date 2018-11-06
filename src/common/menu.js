const menuData = [
  {
    name: "首页",
    icon: "home",
    path: "home"
  },
  {
    name: "Todo",
    path: "todo"
  },
  {
    name: "Counter",
    path: "counter"
  },
  {
    name: "一级菜单",
    icon: "person",
    path: "about",
    show: false,
    children: [
      {
        name: "个人中心",
        path: "person"
      },
      {
        name: "弹簧动效",
        path: "spring"
      },
      {
        name: "react相关Demo",
        path: "demo",
        show: false,
        children: [
          {
            name: "Context",
            path: "context"
          },
          {
            name: "loading效果",
            path: "loading"
          },
          {
            name: "三级菜单3",
            path: "loading3"
          },
          {
            name: "三级菜单4",
            path: "loading1",
            show: false,
            children: [
              {
                name: "四级菜单1",
                path: "test"
              },
              {
                name: "四级菜单2",
                path: "test2"
              },
              {
                name: "四级菜单3",
                path: "test3"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "404",
    path: "404",
    icon: "user"
  }
];

function formatter(data, parentPath = "/", ...rest) {
  return data.map(item => {
    let { path } = item;
    path = parentPath + path;
    let result = {
      ...item,
      path
    };
    if (item.children) {
      result = {
        ...result,
        children: formatter(item.children, `${path}/`, ...rest)
      };
    }
    return result;
  });
}

const getMenuData = () => formatter(menuData);

export default getMenuData;
