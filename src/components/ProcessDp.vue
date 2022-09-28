<template>
    <el-tabs v-model="editableTabsValue" type="card" editable class="demo-tabs" @edit="handleTabsEdit">
        <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
            <el-container v-html=item.content style="width: 100%; height: 100%; "></el-container>
        </el-tab-pane>
        <!-- <ToolBar></ToolBar> -->
    </el-tabs>
    
</template>


<script setup>
    import { tabIndex, editableTabsValue, editableTabs, handleTabsEdit } from '../js/process'
// import ToolBar from './ToolBar.vue';


</script>

<style scoped src="../css/process.css">
    .Process-cont {
        height: 100%;
    }
</style>