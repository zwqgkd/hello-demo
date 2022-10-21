<template>
    <el-table row-key="id" lazy :data="tableData" border style="width: 100%">
        <el-table-column prop="paramName" label="参数名称"/>
        <el-table-column prop="currentResult" label="当前结果"/>
        <el-table-column prop="globalVariable" label="全局变量"/>
    </el-table>
</template>


<script setup>
import {tableData} from './moduleResult'
defineProps(['tableData'])

</script>