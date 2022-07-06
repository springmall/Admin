<template>
  <a
    href="javascript:void(0);"
    class="relative h-12 flex justify-center items-center cursor-pointer"
    :class="{
      'bg-blue-500 text-blue-50': isDisplay,
    }"
    @focus="displayMenu()"
    @blur="hideMenu()"
  >
    <div class="flex items-center px-3">
      <font-awesome-icon
        class="w-5"
        icon="message"
        :class="{
          'bg-blue-500 text-blue-50': isDisplay,
          'text-blue-500': !isDisplay,
        }"
      />
      <div
        class="text-xs bg-red-600 rounded-full p-0.5 text-white scale-75 absolute top-2 right-0"
      >
        20
      </div>
    </div>
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
        <font-awesome-icon class="w-5" icon="user" /> 系统消息
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import Menu from "./Menu.vue";
import Avatar from "./Avatar.vue";
import { mapState } from "pinia";
import { appStore } from "../store/appStore";
import { mapActions } from "pinia";

export default {
  name: "MessageMenu",
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
  components: { Menu, Avatar },
};
</script>
