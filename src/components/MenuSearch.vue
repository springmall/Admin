<template>
  <div class="px-4">
    <div class="flex items-center relative">
      <input
        class="text-gray-800 w-full outline-none shadow-inner py-1 bg-gray-200 rounded-full pl-3  pr-12"
        placeholder="Search"
      />
      <font-awesome-icon
        class="w-5 px-2 -pl-1 absolute right-0 text-blue-500"
        icon="search"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from "pinia";
export default {
  name: "MenuSearch",
  }
</script>
