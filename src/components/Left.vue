<template>
  <div class="select-none flex cursor-pointer   bg-slate-700 ">
    <Logo class="flex-shrink-0"></Logo>
    <MenuSearch></MenuSearch>
    <div class="  overflow-auto" >
      <Menu  :data="menu"></Menu>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from "pinia";
import { appStore } from "../store/appStore";
import { mapActions } from "pinia";
import Logo from "./Logo.vue";
import Menu from "./Menu.vue";
import MenuSearch from "./MenuSearch.vue";

export default {
    name: "Left",
    computed: {
        ...mapState(appStore, ["menu"]),
    },
    methods: { ...mapActions(appStore, ["setMenu"]) },
    setup() {
        const appstore = appStore();
        return {
            appStore,
        };
    },
    mounted() {
      this.setMenu(null);
    },
    data() {
        return {};
    },
    components: { Logo, Menu, MenuSearch }
};
</script>
