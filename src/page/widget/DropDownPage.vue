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
        <div class="w-32">
          <Dropdown title="方向">
            <template v-slot:default>
              <div class="w-32 bg-blue-500 text-white ">
                <div class="px-2 py-1 hover:bg-blue-600">上</div>
                <div class="px-2  py-1 hover:bg-blue-600">下</div>
                <div class="px-2  py-1 hover:bg-blue-600" >左</div>
                <div class="px-2  py-1 hover:bg-blue-600">右</div>
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
  data(){
    return {
      open:false
    }
  }
};
</script>
