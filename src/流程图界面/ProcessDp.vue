<template>
    <el-tabs v-model="editableTabsValue" type="card" editable class="demo-tabs" @edit="handleTabsEdit">
        <el-tab-pane v-for="item in editableTabs" :key="item.name" :name="item.name">
            <template #label>
                {{item.title}}
                <el-button icon="pointer">开始</el-button>
                <el-button icon="finished">结束</el-button>
            </template>

            <iframe src='#/userLF' width='100%' :height="height1+'px'" scrolling="no"></iframe>
        </el-tab-pane>
        <!-- <ToolBar></ToolBar> -->
    </el-tabs>

</template>


<script setup>
import { editableTabsValue, editableTabs, handleTabsEdit } from './process'
import { ref } from 'vue'


//iframe自适应高度
const height1 = ref(0)
height1.value = window.innerHeight - 80 - 102
window.addEventListener('resize', () => {
    height1.value = window.innerHeight - 80 - 102
})


</script>

<style scoped>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.el-tabs.el-tabs--top.el-tabs--card.demo-tabs {
    height: 100%;
}

.el-tab-pane {
    height: 100%;
}
</style>