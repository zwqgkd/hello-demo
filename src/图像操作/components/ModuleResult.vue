<template>
    <el-table row-key="id" lazy :data="tableData" border style="width: 100%">
        <el-table-column prop="paramName" label="参数名称"/>
        <el-table-column prop="currentResult" label="当前结果"/>
        <el-table-column prop="globalVariable" label="全局变量"/>
    </el-table>
</template>


<script setup>
import emitter from '../../sys/emiter.js'
import { tableData } from '../js/moduleResult';

defineProps({tableData})
//emitter 接受的信息
emitter.on('refresh_tableData_msg', (e) => {setTableData(e)} )
//更新tableData信息
function setTableData(e) {
    tableData.value[0].currentResult = e.newResult
    tableData.value[0].globalVariable = e.globalVariable
}
</script>