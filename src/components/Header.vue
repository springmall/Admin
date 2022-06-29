<template>
  <div class="flex text-gray-800 h-12 items-center bg-gray-50">
    <MenuSearch></MenuSearch>
    <div></div>
    <div class="flex flex-row-reverse flex-grow items-center pr-4">
      <a
        href="javascript:void(0);"
        class="relative h-12 flex justify-center items-center  px-5  cursor-pointer"
        :class="{
            'bg-blue-500 text-blue-50':isDisplay
        }"
        @focus="displayMenu()"
        @blur="hideMenu()"
        >
        <Avatar></Avatar>
        <div class="px-2">个人中心</div>
        <div
            v-if="isDisplay"
          class="absolute top-12 right-0 bg-blue-500 text-white w-48 text-sm transition-all  shadow "
        >
     
          <div class="px-5 py-2 cursor-pointer hover:bg-blue-600" @click="()=>{
            this.$router.push({path:'/user/profile'})
          }" >  <font-awesome-icon class="w-5" icon="user" /> Profile</div>
          <div class="px-5 py-2 cursor-pointer hover:bg-blue-600" @click="()=>{
            this.$router.push({path:'/user/message'})
          }"> <font-awesome-icon class="w-5" icon="message" /> Message</div>
          <div class="px-5 py-2 cursor-pointer hover:bg-blue-600" @click="()=>{
            this.$router.push({path:'/user/setting'})
          }"> <font-awesome-icon class="w-5" icon="gear" /> Setting</div>
          <div class="px-5 py-2 cursor-pointer hover:bg-blue-600" @click="()=>{
            this.$router.push({name:'login'})
          }" ><font-awesome-icon class="w-5" icon="arrow-right-from-bracket" /> Logout</div>
        </div>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import MenuSearch from "./MenuSearch.vue";
import Menu from "./Menu.vue";
import Avatar from "./Avatar.vue";
export default {
    name: "Header",
    data:()=>{
        return {
            isDisplay:false,
        }
    },
    methods:{
        displayMenu(){
            console.log("显示")
            this.isDisplay=true;
        },
        hideMenu(){
            this.isDisplay=false;
        }
    },
    components: { MenuSearch, Menu, Avatar }
};
</script>
