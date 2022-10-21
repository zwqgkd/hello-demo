<template>
    <splitpanes>
        <pane>
            <el-aside width="99%">
                <component :is="compnts[0]"></component>
            </el-aside>
        </pane>
        <pane>

            <splitpanes horizontal :style="'height:'+height_right+'px'">
                <pane>
                    <component :is="compnts[1]"></component>
                </pane>
                <pane>
                    <component :is="compnts[2]"></component>
                </pane>
            </splitpanes>

        </pane>
    </splitpanes>
</template>


<script setup>
import {Splitpanes, Pane} from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import {defineProps} from "vue";
import {height_right} from "@/主窗口/js/mainWindow";
import {defineSplitWidth} from '../../js/layout.js'

defineProps(['compnts','height_right'])

//定义分割线宽度
defineSplitWidth()


</script>