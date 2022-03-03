<template>
    <tr class="row">
      <td class="cell">{{ document.label }}</td>
      <td class="cell"><a :href="document.iri" target="_blank">{{ document.iri }}</a></td>
      <td class="cell">{{ summary }}</td>
    </tr>
</template>

<script lang="ts">
import IDocument from '../types/IDocument';
import { computed, defineComponent } from '@vue/runtime-core';
import { PropType } from 'vue';
import config from '@/config';

export default defineComponent({
  props: {
    document: Object as PropType<IDocument>,
  },
  name: 'ListItem',
  setup(props) {
    const summary = computed(() => {
      const { snippetSize } = config;
      const description = props.document?.description;

      return description ? description[0].substring(0, snippetSize) + '...' : 'No Description';
    });

    return { summary }
  }
})
</script>

<style>
  .row {
    height: 10%;
    width: 33%;
  }
</style>