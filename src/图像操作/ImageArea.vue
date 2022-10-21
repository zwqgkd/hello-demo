<template>
    <el-scrollbar>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="图像" name="first">
                <PicWindow></PicWindow>
            </el-tab-pane>
            <el-tab-pane label="模块结果" name="second">
                <ModuleResult :tableData="tableData"></ModuleResult>
            </el-tab-pane>
        </el-tabs>
    </el-scrollbar>
</template>
<script setup>

import PicWindow from './components/PicWindow.vue'
import ModuleResult from "@/图片展示区/components/ModuleResult.vue";
import {ref} from "vue";
defineProps(['tableData'])
const activeName = ref('first')
</script>