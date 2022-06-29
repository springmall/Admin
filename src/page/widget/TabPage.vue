<template>
  <div class="flex">
    <panel
      title="Tab"
      desc=""
      class="w-1/2 m-2"
      closeable
      expandable
      :noFooter="false"
      noHeader="false"
    >
      <template v-slot:default>
        <Tab :data="data" :closeable="false">
          <template v-slot:default="data">
            {{ data.active }}
          </template>
        </Tab></template>
    </panel>

    <panel title="Tab" desc="" class="w-1/2 m-2" :noFooter="false" >
      <template v-slot:default
        ><Tab :data="data" >
          <template v-slot:default="data">
            {{ data.active }}
          </template>
        </Tab></template
      >
      <template v-slot:footer>footer</template>
    </panel>

    <panel
      title="Tab"
      desc=""
      class="w-1/2 m-2"
     
      :noFooter="false"
    >
      <template v-slot:default
        ><Tab :data="data" :closeable="false">
          <template v-slot:default="data">
            {{ data.active }}
          </template>
        </Tab></template
      >
      <template v-slot:footer>footer</template>
    </panel>
  </div>
</template>

<script lang="ts">
import Panel from "../../widget/Panel.vue";
import Tab from "../../widget/Tab.vue";
export default {
  components: { Panel, Tab },
  data() {
    return {
      data: [
        {
          name: "Tab1",
        },
        {
          name: "Tab2",
        },
        {
          name: "Tab3",
        },
        {
          name: "Tab4",
        },
        {
          name: "Tab5",
        },
      ],
    };
  },
  name: "TabPage",
};
</script>
