<template>
    <div class="flex text-gray-400 h-12 items-center">
      <MenuSearch></MenuSearch>
      <div></div>
      <div class="flex flex-row-reverse  flex-grow  items-center pr-2">
          <div>个人中心</div>
      </div>
    </div>
</template>
<script lang="ts">
import MenuSearch from "./MenuSearch.vue";
export default {
    name: "Header",
    components: { MenuSearch }
};
</script>
