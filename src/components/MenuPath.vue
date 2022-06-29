<template>
  <div
    class="flex  "
  >
    <div v-for="m in menuPath" :key="m">
        {{m.name}}
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from "pinia";
import { appStore } from "../store/appStore";
import { mapActions } from "pinia";

export default {
  name: "MenuPath",
  props: {
    data: Array,
  },
    computed: {
        ...mapState(appStore, ["menuPath"]),
    },
  setup() {
    const appstore = appStore();
    return {
      appStore,
    };
  },
  methods: { ...mapActions(appStore, ["toggleMenu"]) },
  mounted() {},
  data() {
    return {};
  },
};
</script>
