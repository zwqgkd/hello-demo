<template>

        <el-table :data="historyTableData" border style="width: 100%">
            <el-table-column prop="index" label="执行序号" />
            <el-table-column prop="time" label="时间" />
            <el-table-column prop="moduleData" label="模块数据" />
        </el-table>

</template>

<script setup>
const props = defineProps(['historyTableData'])

</script>