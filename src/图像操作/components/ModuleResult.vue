<template>
    <!-- 模块结果表格 -->
    <el-table row-key="id" lazy :data="moduleResultData" border style="width: 100%">
        <el-table-column prop="paramName" label="参数名称"/> <!-- 参数名称列 -->
        <el-table-column prop="currentResult" label="当前结果"/> <!-- 当前结果列 -->
        <el-table-column prop="globalVariable" label="全局变量"/> <!-- 全局变量列 -->
    </el-table>
</template>


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
