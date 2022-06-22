import { defineStore } from "pinia";
export const appStore = defineStore("appStore", {
  state: () => {
    return {
      menu: [
        {
          name: "menu1",
          route: "/menu1",
        },
        {
          name: "menu2",
          route: "/menu2",
        },
        {
          name: "menu3",
          route: "/menu3",
        },
      ],
      version: "xxx",
    };
  },
  actions: {
    //设置菜单
    setMenu(menu: any) {
      this.menu = menu;
    },
  },
});
