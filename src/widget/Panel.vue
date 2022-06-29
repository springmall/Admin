<template>
  <div class="border shadow flex flex-col">
    <slot name="header" v-if="noHeader">
      <div class="header flex  p-2  pb-1  border-b  flex-shrink">
        <div class="title flex-grow">
          <div class=" text-sm font-bold">{{ title }}</div>
          <div class="text-sm   text-gray-500">{{ desc }}</div>
        </div>
        <div class="action" v-if="closeable"> 
           <font-awesome-icon class="w-5 text-gray-400 hover:text-gray-600 cursor-pointer" icon="close" />
        </div>
      </div>
    </slot>
    <div class="content  p-2 grow">
      <slot name="default"></slot>
    </div>
    <div class="footer p-2 py-1  border-t text-sm text-gray-600" v-if="noFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Panel",
  props: {
    title: String,
    desc: String,
    noFooter:{
        type:Boolean,
        default:true,
    },
    noHeader:{
        type:Boolean,
        default:true,
    },
     closeable:{
        type:Boolean,
        default:true,
    },
  },
};
</script>
