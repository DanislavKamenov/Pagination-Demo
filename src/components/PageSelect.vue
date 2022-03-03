<template>
  <div class="paginator">
      <button :disabled="disableBack" @click="onBackClick" class="btn back">back</button>
      <button :disabled="disableForward" @click="onForwardClick" class="btn forward">forward</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'PageSelect',
    props: {
      onForwardClick: Function,
      onBackClick: Function,
      disableBack: Boolean,
      disableForward: Boolean,
    }
});
</script>

<style>
  .paginator {
    margin: 0 auto;

  }
  .btn {
    cursor: pointer;
    margin: 20px 20px;
  }

  .btn:disabled {
    background-color: #cccccc;
    cursor: default;
  }
    
</style>