<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="当前结果" name="first">
            <el-scrollbar>
                <CurrentData :currentTableData="currentTableData"></CurrentData>
            </el-scrollbar>

        </el-tab-pane>
        <el-tab-pane label="历史结果" name="second">
            <el-scrollbar>
                <HistoryData :historyTableData="historyTableData"></HistoryData>
            </el-scrollbar>
        </el-tab-pane>
        <el-tab-pane label="帮助" name="third">
            <el-scrollbar>
                <HelpData :helpInfo="helpInfo"></HelpData>
            </el-scrollbar>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup>

import CurrentData from './components/CurrentData.vue'
import HistoryData from './components/HistoryData.vue'
import HelpData from './components/HelpData.vue'
import {ref} from 'vue'

const activeName = ref('first')
defineProps(['currentTableData', 'historyTableData', 'helpInfo'])

</script>