<template>
    <div class="">
        <div class="flex   border  border-b-0 flex-row text-base ">
            <div class=" px-2 py-2  flex items-center  cursor-pointer "
            :class="{
                'bg-blue-500 text-white':idx==active,
                 'hover:bg-blue-100':idx!=active
            }"
            v-for="(t,idx) in data"  :key="t" @click="changeTab(idx)">
                <div class="px-1   text-sm"> {{t.name}}</div>
                <font-awesome-icon v-if="closeable" class="w-5 text-gray-400 hover:text-gray-600 cursor-pointer" icon="close" />
            </div>
        </div>
        <div class=" border p-1 bg-white">
            <slot :active="active"></slot>
        </div>
    </div>
</template>


<script lang="ts">
export default {
  name: "Tab",
  data(){
    return {
        active:0
    }
  },
  methods:{
    changeTab(idx){
        this.active=idx
    }
  },
  props:{
    data:Array,
    closeable:{
        type:Boolean,
        default:true,
    },
  }
};
</script>