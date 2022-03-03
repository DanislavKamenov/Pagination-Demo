<template>
    <h1>Pagimation Demo</h1>
    <div class="table-container">
        <label-select @change="onLabelChange"/>
        <table-error v-if="!documents" :color="'blue'" :message="'Loading...'"></table-error>
        <table-error v-else-if="!documents?.length" :color="'red'" :message="'No Documents Found!'"></table-error>
        <document-table v-else class="table" :documents="documents" />
        <page-select
            :onBackClick="onBackClick" 
            :onForwardClick="onForwardClick"
            :disableBack="disableBack"
            :disableForward="disableForward"
        />
    </div>
</template>

<script lang='ts'>
import config from "@/config";
import Http from "@/utils/Http";
import { computed, defineComponent, ref, watchEffect } from "@vue/runtime-core";
import DocumentTable from "./DocumentTable.vue";
import PageSelect from "./PageSelect.vue";
import LabelSelect from "./LabelSelect.vue";
import TableError from "./TableMessage.vue";
import IResponse from '../types/IResponse';
import IDocument from "@/types/IDocument";
import { clamp } from '../utils';

export default defineComponent({
    name: 'DashBoard',
    components: {
        LabelSelect,
        DocumentTable,
        PageSelect,
        TableError,
    },
    setup() {
        const { pageSize, startIndex, labels } = config;
        const http = new Http();
        const index = ref(startIndex);
        const label = ref(labels[0])
        const documents = ref<IDocument[]>();
        const total = ref(0);
        const disableBack = computed<Boolean>(() => index.value === startIndex)
        const disableForward = computed<Boolean>(() => index.value === total.value);

        watchEffect(async () => {
            const { response: { docs, numFound } } = await http.getData<IResponse>(label.value, index.value, pageSize);
            documents.value = docs;
            total.value = numFound
        });
        

        const onBtnClick = (direcation: number) => () => {
            index.value = clamp(startIndex, total.value, index.value + (pageSize * direcation));
        };

        const onLabelChange = (newValue: Event) => {
            label.value = (newValue.target as HTMLSelectElement).value;
        }

        return { 
            documents, 
            total,
            disableBack, 
            disableForward,
            onBackClick: onBtnClick(-1), 
            onForwardClick: onBtnClick(1),
            onLabelChange
        }
    }
});
</script>

<style>
    .table-container {
        width: 50%;
        margin: 0 auto;
    }

    .table {
        width: 100%;
        height: 700px;
        border: 3px solid black;
        margin: 10px 0;
    }
        
</style>