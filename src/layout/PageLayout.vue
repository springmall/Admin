<template>
  <div class="pagelayout">
    <div class="flex flex-row h-screen w-screen">
      <Left class="w-64 flex-col bg-blue-500 shadow"></Left>
      <Workspace class="flex flex-col grow overflow-hidden">
        <Header class="shadow"></Header>
        <div class="flex flex-col">
          <PageTab></PageTab>
          <MenuPath></MenuPath>
          <router-view v-slot="{ Component }">
            <transition>
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </div>
      </Workspace>
      <!-- <Footer></Footer> -->
    </div>
  </div>
</template>
<script lang="ts">
import MenuPath from "../components/MenuPath.vue";
import PageTab from "../components/PageTab.vue";
export default {
  name: "PageLayout",
  components: { MenuPath, PageTab },
};
</script>
