<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick"> <!-- 标签页组件 -->
        <el-tab-pane label="当前结果" name="first"> <!-- 当前结果标签页 -->
            <el-scrollbar> <!-- 滚动条，在内容超出容器宽高时显示滚动条 -->
                <CurrentData></CurrentData> <!-- 当前结果显示区组件 -->
            </el-scrollbar>

        </el-tab-pane>
        <el-tab-pane label="历史结果" name="second"> <!-- 历史结果标签页 -->
            <el-scrollbar> <!-- 滚动条，在内容超出容器宽高时显示滚动条 -->
                <HistoryData></HistoryData> <!-- 历史结果显示区组件 -->
            </el-scrollbar>
        </el-tab-pane>
        <el-tab-pane label="帮助" name="third"> <!-- 帮助标签页 -->
            <el-scrollbar> <!-- 滚动条，在内容超出容器宽高时显示滚动条 -->
                <HelpData></HelpData> <!-- 帮助显示区组件 -->
            </el-scrollbar>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup>

import CurrentData from './components/CurrentData.vue' //当前结果显示区组件
import HistoryData from './components/HistoryData.vue' //历史结果显示区组件
import HelpData from './components/HelpData.vue' //帮助显示区组件
import {ref} from 'vue'

const activeName = ref('first') //当前选中标签页




</script>