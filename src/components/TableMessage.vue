<template>
  <div :color="color" class="table-message">{{ message }}</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'TableMessage',
    props: {
        color: String,
        message: String,
    }
});
</script>

<style>
    .table-message {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        width: 100%;
        font-size: 50px;
    }
</style>