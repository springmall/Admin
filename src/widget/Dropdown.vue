<template>
    <div class="  ">
        <div class="handler flex items-center cursor-pointer w-full border py-1 px-1">
            <div class="flex-grow px-1">{{title}}</div>
            <font-awesome-icon class="w-5 text-gray-400 hover:text-gray-600 " icon="arrow-up" />
        </div>
        <div class=""> 
            <slot name="default"></slot>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  name: "Dropdown",
  props:{
    title:{
        type:String,
    }
  }
}
</script>