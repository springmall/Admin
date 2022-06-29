<template>
  <div class="flex">
    <panel
      title="Table"
      desc="sampleTable"
      class="w-1/2 m-2"
      closeable
      expandable
      :noFooter="false"
      noHeader
    >
      <template v-slot:default
        >panel content panel contentpanel contentpanel contentpanel contentpanel
        contentpanel contentpanel contentpanel contentpanel contentpanel
        contentpanel contentpanel contentpanel content</template
      >
      <template v-slot:footer>footer</template>
    </panel>

    <panel title="Table" desc="sampleTable" class="w-1/2 m-2"  :noHeader="false">
      <template v-slot:default>panel content</template>
      <template v-slot:footer>footer</template>
    </panel>

    <panel title="Table" desc="sampleTable" class="w-1/2 m-2"  :noHeader="false"  :noFooter="false">
      <template v-slot:default>panel content</template>
      <template v-slot:footer>footer</template>
    </panel>
  </div>
</template>

<script lang="ts">
import Panel from "../../widget/Panel.vue";
export default {
  components: { Panel },
  name: "TablePage",
};
</script>
