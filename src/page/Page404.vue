<template>
    <div class="flex flex-col h-screen  w-screen items-center justify-center">

        <div class="text-9xl  text-gray-400">Page not found</div>
        <div class="text-xl flex mt-5">
            <a class="pl-5 cursor-pointer hover:text-blue-500" @click="back()">back</a> 
            <a class="pl-5 cursor-pointer hover:text-blue-500" @click="gohome()">go home</a>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  name: "Page404",
  methods: {
    back() {
      this.$router.back();
    },
    gohome() {
      this.$router.push({
        name: "home",
      });
    },
  },
  mounted() {},
  data() {
    return {};
  },
};
</script>