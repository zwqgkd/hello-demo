<template>
    <el-tabs v-model="editableTabsValue" type="card" editable class="demo-tabs" @edit="handleTabsEdit">
        <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
            <el-container v-html=item.content style="width: 100%; height: 100%; "></el-container>
        </el-tab-pane>
        <!-- <ToolBar></ToolBar> -->
    </el-tabs>

</template>


<script setup>
    import { tabIndex, editableTabsValue, editableTabs, handleTabsEdit } from './process'
// import ToolBar from './ToolBar.vue';


</script>

<style scoped>


    .demo-tabs>.el-tabs__content {
        padding: 32px;
        color: #6b778c;
        font-size: 32px;
        font-weight: 600;
    }


</style>