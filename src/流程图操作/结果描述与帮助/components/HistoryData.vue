<template>
    <!-- 表格组件 -->
    <el-table :data="historyTableData" border style="width: 100%">
        <el-table-column prop="index" label="执行序号"/> <!-- 执行序号列 -->
        <el-table-column prop="time" label="时间"/> <!-- 时间列 -->
        <el-table-column prop="moduleData" label="模块数据"/> <!-- 模块数据列 -->
    </el-table>
    <button @click="changeInfo">vuex_test</button>
</template>


<script>
import {mapState} from 'vuex'
import { mapMutations } from 'vuex'
export default {
    inject: ['historyTableData'],
    data() {
        return {
            historyTableData: this.historyTableData
        }
    },
    computed: {
        ...mapState([])
    },
    methods:{
        // changeInfo(){
        //     this.$store.commit('changeVuexHelpInfo','new helpInfo')
        // }
        ...mapMutations(['changeVuexHelpInfo']),
        changeInfo(){
            this.changeVuexHelpInfo('new helpInfo')
        }
    }
}
</script>