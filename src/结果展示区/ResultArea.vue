<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="当前结果" name="first">
            <el-scrollbar>
                <el-table :data="currentTableData" border style="width: 100%">
                    <el-table-column prop="index" label="序号" />
                    <el-table-column prop="codeInfo" label="编码信息" />
                    <el-table-column prop="codeState" label="码状态" />
                    <el-table-column prop="centerX" label="中心X" />
                    <el-table-column prop="centerY" label="中心Y" />
                    <el-table-column prop="codeAngle" label="码角度" />
                    <el-table-column prop="PPM" label="PPM" />
                </el-table>
            </el-scrollbar>
        </el-tab-pane>
        <el-tab-pane label="历史结果" name="second">
            <el-scrollbar>
                <el-table :data="historyTableData" border style="width: 100%">
                    <el-table-column prop="index" label="执行序号" />
                    <el-table-column prop="time" label="时间" />
                    <el-table-column prop="moduleData" label="模块数据" />
                </el-table>
            </el-scrollbar>
        </el-tab-pane>
        <el-tab-pane label="帮助" name="third">
            {{helpInfo}}
        </el-tab-pane>
    </el-tabs>
</template>

<script setup>
import {ref} from 'vue'
const activeName = ref('first')
const props = defineProps(['currentTableData', 'historyTableData', 'helpInfo'])

</script>