<template>
  <select name="labels" id="labels">
      <option v-for="(option, id) in options" :key="id" :value="option">{{option}}</option>
  </select>
</template>

<script lang='ts'>
import config from "@/config";
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
    name: 'LabelSelect',
    setup() {
        const { labels } = config;
        const options = ref<String[]>(labels)

        return { options }
    }
});
</script>

<style>

</style>