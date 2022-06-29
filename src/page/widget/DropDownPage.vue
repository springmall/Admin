<template>
  <div class="flex">
    <panel
      title="Dropdown"
      class="w-1/2 m-2"
      closeable
      expandable
      :noFooter="false"
      noHeader
    >
      <template v-slot:default>
        <div class="w-20">
          <Dropdown title="方向">
            <template v-slot:default>
              <div class="w-20 bg-blue-500 text-white">
                <div class="px-2">上</div>
                <div class="px-2">下</div>
                <div class="px-2">左</div>
                <div class="px-2">右</div>
              </div>
            </template>
          </Dropdown>
        </div>
      </template>
    </panel>
  </div>
</template>

<script lang="ts">
import Dropdown from "../../widget/Dropdown.vue";
import Panel from "../../widget/Panel.vue";
export default {
  components: { Panel, Dropdown },
  name: "DropDownPage",
};
</script>
