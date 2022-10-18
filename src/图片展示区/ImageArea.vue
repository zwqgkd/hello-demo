<template>
    <el-scrollbar>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="图像" name="first">
                <pic-window></pic-window>
            </el-tab-pane>
            <el-tab-pane label="模块结果" >
                <el-table row-key="id" lazy :data="tableData" border style="width: 100%">
                    <el-table-column prop="paramName" label="参数名称"/>
                    <el-table-column prop="currentResult" label="当前结果"/>
                    <el-table-column prop="globalVariable" label="全局变量"/>
                </el-table>
            </el-tab-pane>

        </el-tabs>
    </el-scrollbar>
</template>
<script setup>
import {ref} from 'vue'
import PicWindow from './components/PicWindow.vue'
const props = defineProps(['tableData'])
const activeName = ref('first')
const tableData = ref([
    {
        id: 0,
        paramName: '图像源1',
        currentResult: null,
        globalVariable: null,
        children: [
            {
                id: 1,
                paramName: '图像数据',
                currentResult: null,
                globalVariable: null,
                children: [
                    {
                        id: 2,
                        paramName: '图像数据',
                        currentResult: null,
                        globalVariable: null,
                    }, {
                        id: 3,
                        paramName: '图像宽度',
                        currentResult: null,
                        globalVariable: null,
                    }, {
                        id: 4,
                        paramName: '图像高度',
                        currentResult: null,
                        globalVariable: null,
                    }, {
                        id: 5,
                        paramName: '图像像素格式',
                        currentResult: null,
                        globalVariable: null,
                    },
                ]
            },
            {
                id: 6,
                paramName: '灰度图像数据',
                currentResult: null,
                globalVariable: null,
                children: [
                    {
                        id: 7,
                        paramName: '灰度图像数据',
                        currentResult: null,
                        globalVariable: null,
                    }, {
                        id: 8,
                        paramName: '灰度图像高度',
                        currentResult: null,
                        globalVariable: null,
                    }, {
                        id: 9,
                        paramName: '灰度图像宽度',
                        currentResult: null,
                        globalVariable: null,
                    }, {
                        id: 10,
                        paramName: '灰度图像像素格式',
                        currentResult: null,
                        globalVariable: null,
                    },
                ]
            }, {
                id: 11,
                paramName: '当前图像路径',
                currentResult: null,
                globalVariable: null,
            },
            {
                id: 12,
                paramName: '帧号',
                currentResult: null,
                globalVariable: null,
            }, {
                id: 13,
                paramName: '丢帧数',
                currentResult: null,
                globalVariable: null,
            }, {
                id: 14,
                paramName: '丢包数',
                currentResult: null,
                globalVariable: null,
            }, {
                id: 15,
                paramName: '相机获取失败次数',
                currentResult: null,
                globalVariable: null,
            },
        ]
    }
])
</script>