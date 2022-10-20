<template>

    <el-table :data="currentTableData" border style="width: 100%">
        <el-table-column prop="index" label="序号" />
        <el-table-column prop="codeInfo" label="编码信息" />
        <el-table-column prop="codeState" label="码状态" />
        <el-table-column prop="centerX" label="中心X" />
        <el-table-column prop="centerY" label="中心Y" />
        <el-table-column prop="codeAngle" label="码角度" />
        <el-table-column prop="PPM" label="PPM" />
    </el-table>

</template>

<script setup>
const props = defineProps(['currentTableData'])
</script>