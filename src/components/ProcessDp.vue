<template>
    <span>流程展示区</span>
    <el-tabs v-model="editableTabsValue" type="card" editable class="demo-tabs" @edit="handleTabsEdit">
        <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
            {{ item.content }}
        </el-tab-pane>
    </el-tabs>
</template>

    

<script setup>
import {tabIndex,editableTabsValue,editableTabs,handleTabsEdit} from '../js/process'
</script>

<style src="../css/process.css">

</style>

