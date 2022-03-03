<template>
  <table>
    <tr>
      <td>Label</td>
      <td>IRI</td>
      <td>Description</td>
    </tr>
    <document-row v-for="document in documents" :document=document :key="document.id" />
  </table>
</template>

<script lang="ts">
import IDocument from '@/types/IDocument';
import { defineComponent, PropType } from '@vue/runtime-core';
import DocumentRow from './DocumentRow.vue';

export default defineComponent({
  name: 'DocumentTable',
  props: {
    documents: Array as PropType<IDocument[]>,
  },
  components: {
     DocumentRow,
  },
})
</script>

<style>
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 7px;
  }
</style>