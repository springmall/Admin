<template>
   <div class="pagelayout">
        <div class="flex flex-col h-screen w-screen">
            <Header></Header>
            <Workspace class="flex grow border overflow-hidden">
                <Left class="w-64 flex-col"></Left>
                 <router-view v-slot="{ Component }">
                    <transition>
                    <keep-alive>
                        <component :is="Component" />
                    </keep-alive>
                    </transition>
                </router-view>
            </Workspace>
            <Footer></Footer>
        </div>
   </div>
</template>
<script lang="ts">
export default {
  name: "PageLayout",
};
</script>
