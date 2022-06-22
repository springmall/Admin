<template>
    <div class="flex">
      <div class="p-2 flex items-baseline"> 
          <div>{{ $t("title") }}</div>
          <div class=" text-gray-400 pl-5  text-xs"> {{ $t("slogan") }}</div>
      </div>
      <div></div>
      <div class="flex flex-row-reverse  flex-grow  items-center pr-2">
          <div>个人中心</div>
      </div>
    </div>
</template>
<script lang="ts">
export default {
  name: "Header",
};
</script>
