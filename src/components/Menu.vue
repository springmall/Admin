<template>
  <div
    class="flex flex-col text-sm text-white "
    v-for="m in data"
    :key="m.id"
  >
    <div class="head flex px-4 py-2 hover:bg-blue-700 items-center transition-all" @click="DoToggleMenu(m)"
        :class="{
            'bg-blue-600':m._active
        }"
    >
      <div>
        <font-awesome-icon class="w-5" :icon="m?.icon || ''" />
      </div>
      <div class="flex-grow px-2">
        {{ m.name }}
      </div>
      <font-awesome-icon
      class=" w-5"
        v-if="m?.children.length > 0"
        :icon="m._open ? 'angle-down' : 'angle-left'"
      />
    </div>
    <div class="flex flex-row">
        <div class=" w-5"></div>
        <div class="flex-grow"><Menu  v-if="m._open" :data="m.children"></Menu></div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from "pinia";
import { appStore } from "../store/appStore";
import { mapActions } from "pinia";

export default {
  name: "Menu",
  props: {
    data: Array,
  },
  setup() {
    const appstore = appStore();
    return {
      appStore,
    };
  },
  methods: { 
    ...mapActions(appStore, ["toggleMenu"]),DoToggleMenu(menu:any){
        if(menu?.route){
           this.$router.push(menu.route);
        }
        this.toggleMenu(menu);
    } },
  mounted() {},
  data() {
    return {};
  },
};
</script>
