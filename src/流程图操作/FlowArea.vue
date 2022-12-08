<template>
    <el-tabs v-model="editableTabsValue" type="card" editable class="demo-tabs" @edit="handleTabsEdit">
        <el-tab-pane v-for="item in editableTabs" :key="item.name" :name="item.name">
            <template #label>
                {{item.title}}
                <el-button icon="pointer">开始</el-button>
                <el-button icon="finished">结束</el-button>
            </template>
            
            <iframe src='#/logicFlow' ref="mapFrame" width='100%' :height="iframeHeight + 'px'" scrolling="no"></iframe>
        </el-tab-pane>
        <!-- <ToolBar></ToolBar> -->
    </el-tabs>

</template>


<script setup>

import { editableTabsValue, editableTabs, handleTabsEdit, iframeHeight, dynamicIframeHeight } from './js/FlowArea'
import emitter from '../sys/emiter.js'

//iframe自适应高度
window.addEventListener('resize', dynamicIframeHeight)

/**接受userLf iframe发送来的数据， 并且用emitter发射到resultArea组件*/
window.addEventListener('message', (event) => {if(event.data.nodeHelpMsg) /*添加判断是因为这个监听似乎会执行很多次*/emitter.emit("refresh_help_msg", event.data.nodeHelpMsg)})
// /**接受iframe发送来的数据 */
// window.addEventListener('message', handleMessage)
// function handleMessage (event) {
//     // 根据上面制定的结构来解析iframe内部发回来的数据
//     const data = event.data
//     switch (data.cmd) {
//       case 'returnFormJson':
//         console.log("returnFormJson")
//         emitter.emit("msg", data.params.helpMsg)
//         break
//       case 'returnHeight':
//         // 业务逻辑
//         console.log("returnHeight")
//         emitter.emit("msg", data.params.helpMsg)
//         break
//     }
// }
</script>

<style scoped>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.el-tabs.el-tabs--top.el-tabs--card.demo-tabs {
    height: 100%;
}

.el-tab-pane {
    height: 100%;
}
</style>