<template>
  <a
    href="javascript:void(0);"
    class="relative h-12 flex justify-center items-center px-2 cursor-pointer"
    :class="{
      'bg-blue-500 text-blue-50': isDisplay,
    }"
    @focus="displayMenu()"
    @blur="hideMenu()"
  >
    <div class="flex items-center px-3">
      <font-awesome-icon class="w-5" icon="language" />
    </div>
    <div
      v-if="isDisplay"
      class="absolute top-12 right-0 bg-blue-500 text-white w-48 text-sm transition-all shadow"
    >
      <div
        class="px-5 py-2 cursor-pointer hover:bg-blue-600"
        @click="changeLanguage(l)"
        v-for="l in languageList"
        :key="l"
      >
        {{ l.name }}
      </div>

      <div
        class="px-5 py-2 cursor-pointer hover:bg-blue-600"
        @click="
          () => {
            this.$router.push({ path: '/system/languageBuilder' });
          }
        "
      >
        {{ $t("customize") }}
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
  name: "LanguageMenu",
  data: () => {
    return {
      isDisplay: false,
      languageList: [
        {
          code: "en",
          name: "English",
        },
        {
          code: "zh",
          name: "中文",
        },
      ],
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
    changeLanguage(i) {
      this.$i18n.locale = i.code;
    },
  },
  components: { Menu, Avatar },
};
</script>
