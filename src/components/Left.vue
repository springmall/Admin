<template>
  <div class="select-none flex cursor-pointer">
    <div class="px-2 py-2 border-b" v-for="m in menu" :key="m.id">
    {{m.name}}</div>
  </div>
</template>

<script lang="ts">
import { mapState } from "pinia";
import { appStore } from "../store/appStore";
import { mapActions } from "pinia";

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
   
  },
  data() {
    return {
    
    };
  },
};
</script>
