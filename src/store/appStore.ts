import { defineStore } from "pinia";

const initMenu = (menu: any, parent: any) => {
  console.log(menu);
  menu?.forEach((m: any) => {
    m._parent = parent;
    m._active = false;
    m._open = false;
    if (m.children.length > 0) {
      initMenu(m.children, m);
    }
  });
};
export const appStore = defineStore("appStore", {
  state: () => {
    return {
      menu: [
        {
          name: "Home",
          _open: true,
          icon: "home",
          _parent: null,
          children: [],
        },
        {
          name: "Dashboard",
          route: "/home/dashboard",
          icon: "chart-line",
          _open: false,
          children: [],
        },
        {
          name: "Analyze",
          icon: "chart-pie",
          route: "/home/analyze",
          _open: false,
          children: [],
        },

        {
          name: "Template",
          _open: false,
          icon: "code",
          children: [
            {
              name: "Form",
              route: "/form",
              _open: false,
              children: [],
            },
            {
              name: "List",
              route: "/list",
              _open: false,
              children: [],
            },
          ],
        },
        {
          name: "Layout",
          _open: false,
          icon: "copy",
          children: [
            {
              name: "appLayout",
              route: "/appLayout",
              _open: false,
              children: [],
            },
            {
              name: "pageLayout",
              route: "/pageLayout",
              _open: false,
              children: [],
            },
          ],
        },
        {
          name: "Components",
          _open: false,
          icon: "cube",
          children: [
            {
              name: "Tab",
              route: "/404",
              _open: false,
              children: [],
            },
            {
              name: "Tree",
              route: "/404",
              _open: false,
              children: [],
            },
            {
              name: "Table",
              route: "/404",
              _open: false,
              children: [],
            },
          ],
        },
        {
          name: "Page",
          _open: false,
          icon: "file",
          children: [
            {
              name: "404",
              route: "/404",
              _open: false,
              children: [],
            },
            {
              name: "Login",
              route: "/login",
              _open: false,
              children: [],
            },
            {
              name: "Email",
              route: "/email",
              _open: false,
              children: [],
            },
            {
              name: "Signup",
              route: "/signup",
              _open: false,
              children: [],
            },
          ],
        },
        {
          name: "User",
          _open: false,
          icon: "user",
          children: [
            {
              name: "Profile",
              route: "/user/profile",
              _open: false,
              children: [],
            },
            {
              name: "Inbox",
              route: "/user/inbox",
              _open: false,
              children: [],
            },
          ],
        },
        {
          name: "Menu2",
          _open: false,
          _parent: null,
          icon: "bars",
          children: [
            {
              name: "submenu1",
              route: "/submenu1",
              _open: false,
              children: [],
            },
            {
              name: "submenu2",
              route: "/submenu2",
              _open: false,
              children: [],
            },
            {
              name: "submenu3",
              route: "/submenu3",
              _open: false,
              children: [],
            },
            {
              name: "submenu4",
              route: "/submenu4",
              _open: false,
              children: [],
            },
            {
              name: "submenu5",
              route: "/submenu5",
              _open: false,
              children: [],
            },
            {
              name: "submenu6",
              route: "/submenu6",
              _open: false,
              children: [],
            },
            {
              name: "submenu7",
              route: "/submenu7",
              _open: false,
              children: [],
            },
            {
              name: "submenu8",
              route: "/submenu8",
              _open: false,
              children: [],
            },
            {
              name: "submenu8",
              route: "/submenu8",
              _open: false,
              children: [],
            },
            {
              name: "submenu8",
              route: "/submenu8",
              _open: false,
              children: [],
            },
            {
              name: "submenu8",
              route: "/submenu8",
              _open: false,
              children: [],
            },
            {
              name: "submenu8",
              route: "/submenu8",
              _open: false,
              children: [],
            },
            {
              name: "submenu8",
              route: "/submenu8",
              _open: false,
              children: [],
            },
            {
              name: "submenu8",
              route: "/submenu8",
              _open: false,
              children: [],
            },
            {
              name: "submenu8",
              route: "/submenu8",
              _open: false,
              children: [],
            },
            {
              name: "submenu8",
              route: "/submenu8",
              _open: false,
              children: [],
            },
            {
              name: "submenu8",
              route: "/submenu8",
              _open: false,
              children: [],
            },
            {
              name: "submenu8",
              route: "/submenu8",
              _open: false,
              children: [],
            },
            {
              name: "submenu8",
              route: "/submenu8",
              _open: false,
              children: [],
            },
            {
              name: "submenu8",
              route: "/submenu8",
              _open: false,
              children: [],
            },
            {
              name: "submenu8",
              route: "/submenu8",
              _open: false,
              children: [],
            },
          ],
        },
      ],
      menuPath: [],
      activeMenu: null,
      version: "xxx",
    };
  },
  actions: {
    //设置菜单
    setMenu(menu: any) {
      this.menu = menu == null ? this.menu : menu;
      initMenu(this.menu, null);
    },
    //开关菜单
    toggleMenu(menu: any) {
      menu._open = !menu._open;
      menu._active = true;
      if (menu._active) {
        this.setMenuInactivated(this.activeMenu);
        this.activeMenu = menu;
        this.setMenuActive(menu);
      }
    },
    setMenuInactivated(menu: any) {
      if (menu == null) {
        return;
      }
      menu._active = false;
      if (menu._parent != null) {
        this.setMenuInactivated(menu._parent);
      }
    },
    setMenuActive(menu: any) {
      if (menu == null) {
        return;
      }
      menu._active = true;
      if (menu._parent != null) {
        console.log(menu._parent);
        this.setMenuActive(menu._parent);
      }
    },
  },
});
