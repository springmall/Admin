<template>
  <div class="p-2 h-10   text-gray-700 text-sm"></div>
</template>

<script lang="ts">
import { appStore } from "../store/appStore";
import { mapActions, mapState } from "pinia";

export default {
  name: "Footer",
  computed: {
    ...mapState(appStore, ["version"]),
  },
};
</script>
