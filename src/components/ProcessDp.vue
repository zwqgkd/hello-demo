<template>
    <span>流程展示区</span>
    <el-tabs v-model="editableTabsValue" type="card" editable class="demo-tabs" @edit="handleTabsEdit">
        <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
<<<<<<< Updated upstream
            

            <div class="Process-cont">
                <!-- {{ item.content }} -->
                <ProcessContent></ProcessContent>
            </div>


=======
>>>>>>> Stashed changes
        </el-tab-pane>
    </el-tabs>
    
    <ProcessContent></ProcessContent>

    <ToolBar></ToolBar>
</template>

    

<script setup>
import {tabIndex,editableTabsValue,editableTabs,handleTabsEdit} from '../js/process'
import ToolBar from './ToolBar.vue';
import ProcessContent from './ProcessContent.vue';

</script>

<style scoped src="../css/process.css">
.Process-cont{
    height:100%;
}
</style>

