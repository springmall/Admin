<template>
    <div class="border p-2">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="content">
            <slot name="default"></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>


<script lang="ts">
export default {
  name: "Tree",
};
</script>