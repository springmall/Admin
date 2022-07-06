<template>
  <div class="flex text-gray-800 h-12 items-center bg-gray-50">
    <MenuStyleHandler></MenuStyleHandler>
    <MenuSearch></MenuSearch>
    <div></div>
    <div class="flex flex-row-reverse flex-grow items-center pr-4">
      <UserMenu></UserMenu>
      <MessageMenu></MessageMenu>
      <LanguageMenu></LanguageMenu>
      <ThemeMenu></ThemeMenu>
    </div>
  </div>
</template>
<script lang="ts">
import MenuSearch from "./MenuSearch.vue";
import Menu from "./Menu.vue";
import Avatar from "./Avatar.vue";
import { mapState } from "pinia";
import { appStore } from "../store/appStore";
import { mapActions } from "pinia";
import UserMenu from "./UserMenu.vue";
import MessageMenu from "./MessageMenu.vue";
import MenuStyleHandler from "./MenuStyleHandler.vue";
import LanguageMenu from "./LanguageMenu.vue";
import ThemeMenu from "./ThemeMenu.vue";

export default {
  name: "Header",
  data: () => {
    return {
      isDisplay: false,
    };
  },
  setup() {
    const appstore = appStore();
    return {
      appStore,
    };
  },
  methods: {
    ...mapActions(appStore, ["setLogout"]),
    displayMenu() {
      console.log("显示");
      this.isDisplay = true;
    },
    hideMenu() {
      this.isDisplay = false;
    },
  },
  components: {
    MenuSearch,
    Menu,
    Avatar,
    UserMenu,
    MessageMenu,
    MenuStyleHandler,
    LanguageMenu,
    ThemeMenu,
  },
};
</script>
