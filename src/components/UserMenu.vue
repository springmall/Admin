<template>
  <a
    href="javascript:void(0);"
    class="relative h-12 flex justify-center items-center px-5 cursor-pointer"
    :class="{
      'bg-blue-500 text-blue-50': isDisplay,
    }"
    @focus="displayMenu()"
    @blur="hideMenu()"
  >
    <Avatar></Avatar>
    <div
      v-if="isDisplay"
      class="absolute top-12 right-0 bg-blue-500 text-white w-48 text-sm transition-all shadow"
    >
      <div
        class="px-5 py-2 cursor-pointer hover:bg-blue-600"
        @click="
          () => {
            this.$router.push({ path: '/user/profile' });
          }
        "
      >
        <font-awesome-icon class="w-5" icon="user" />
        {{ $t("profile") }}
      </div>
      <div
        class="px-5 py-2 cursor-pointer hover:bg-blue-600"
        @click="
          () => {
            this.$router.push({ path: '/user/setting' });
          }
        "
      >
        <font-awesome-icon class="w-5" icon="gear" />
        {{ $t("setting") }}
      </div>
      <div
        class="px-5 py-2 cursor-pointer hover:bg-blue-600"
        @click="
          () => {
            this.setLogout();
          }
        "
      >
        <font-awesome-icon class="w-5" icon="arrow-right-from-bracket" />
        {{ $t("logout") }}
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import MenuSearch from "./MenuSearch.vue";
import Menu from "./Menu.vue";
import Avatar from "./Avatar.vue";
import { mapState } from "pinia";
import { appStore } from "../store/appStore";
import { mapActions } from "pinia";

export default {
  name: "UserMenu",
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
  components: { MenuSearch, Menu, Avatar },
};
</script>
