<template>
    <el-scrollbar>  <!-- 滚动条组件，在内容超出容器宽高时显示滚动条 -->
        <el-tabs v-model="activeName" @tab-click="handleClick"> <!-- 标签页组件 -->
            <el-tab-pane label="图像" name="first"> <!-- 图像标签页 -->
                <PicWindow></PicWindow> <!-- 图像显示区组件 -->
            </el-tab-pane>
            <el-tab-pane label="模块结果" name="second"> <!-- 模块结果标签页 -->
                <ModuleResult></ModuleResult> <!-- 模块结果显示区组件 -->
            </el-tab-pane>
        </el-tabs>
    </el-scrollbar>
</template>
<script setup>

import PicWindow from './components/PicWindow.vue' //图像显示区组件
import ModuleResult from "@/图像操作/components/ModuleResult.vue"; //模块结果显示区组件
import {ref} from "vue";
const activeName = ref('first')     //当前选中标签页
</script>