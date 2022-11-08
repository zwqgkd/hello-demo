<template>
    <!-- 表格组件 -->
    <el-table :data="currentTableData" border style="width: 100%">
        <el-table-column prop="index" label="序号" /> <!-- 序号列 -->
        <el-table-column prop="codeInfo" label="编码信息" /> <!-- 编码信息列 -->
        <el-table-column prop="codeState" label="码状态" /> <!-- 码状态列 -->
        <el-table-column prop="centerX" label="中心X" /> <!-- 中心X列 -->
        <el-table-column prop="centerY" label="中心Y" /> <!-- 中心Y列 -->
        <el-table-column prop="codeAngle" label="码角度" /> <!-- 码角度列 -->
        <el-table-column prop="PPM" label="PPM" /> <!-- PPM列 -->
    </el-table>

</template>

<!--<script setup>-->
<!--import { inject } from 'vue';-->
<!--const currentTableData = inject(['currentTableData']) //当前结果显示区组件中注入帮助信息-->
<!--</script>-->
<script>
export default{
    inject:['currentTableData'],//当前结果显示区组件中注入帮助信息
    data(){
        return {
            currentTableData:this.currentTableData
        }
    }
}
</script>