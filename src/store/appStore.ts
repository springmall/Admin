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
          _parent: null,
          children: [
            {
              name: "Dashboard",
              route: "/dashboard",
              _open: false,
              children: [],
            },
            {
              name: "Analyze",
              route: "/analyze",
              _open: false,
              children: [],
            },
          ],
        },
        {
          name: "Menu2",
          _open: false,
          _parent: null,
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
          ],
        },
        {
          name: "Auth",
          _open: false,
          children: [
            {
              name: "login",
              route: "/login",
              _open: false,
              children: [],
            },
            {
              name: "signup",
              route: "/signup",
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
