<template>
    <!-- 模块结果表格 -->
    <el-table row-key="id" lazy :data="moduleResultData" border style="width: 100%">
        <el-table-column prop="paramName" label="参数名称"/> <!-- 参数名称列 -->
        <el-table-column prop="currentResult" label="当前结果"/> <!-- 当前结果列 -->
        <el-table-column prop="globalVariable" label="全局变量"/> <!-- 全局变量列 -->
    </el-table>
</template>


<<<<<<< HEAD
<!--<script setup>-->
<!--import { inject } from 'vue';-->
<!--const moduleResultData = inject('moduleResultData')-->
<!--</script>-->

<script>
export default{
    inject:['moduleResultData'],//模块结果组件中注入模块结果数据
    data(){
        return {
            moduleResultData:this.moduleResultData
        }
    }
}
</script>
=======
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
>>>>>>> 5fc4774a2367a1d8bfb53ac9178d8d25de399b8e
