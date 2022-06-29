<template>
  <a href="javascript:void(0);"  @focus="openMenu()" @blur="closeMenu()" >
    <div
      class="handler flex items-center cursor-pointer w-full border py-1 px-1 hover:bg-blue-200 rounded"
    >
      <div class="flex-grow px-1 select-none ">{{ title }}</div>
      <font-awesome-icon
        class="w-5 text-gray-400 hover:text-gray-600"
        :icon="open?'arrow-up':'arrow-down'"
      />
    </div>
    <div class=" absolute" v-if="open">
      <slot name="default"></slot>
    </div>
  </a>
</template>

<script lang="ts">
export default {
  name: "Dropdown",
  props: {
    title: {
      type: String,
    },
   
  },
  methods: {
    toggleMenu(){
        this.open=!this.open;
    },
    openMenu() {
      this.open = true;
    },
    closeMenu(){
        this.open = false;
    }
  },
  data() {
    return {
      open: false,
      selectIndex:0,
    };
  },
};
</script>
