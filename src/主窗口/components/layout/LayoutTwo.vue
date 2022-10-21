<template>
    <splitpanes>
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

        <pane>
            <el-aside width="99%">
                <component :is="compnts[0]"></component>
            </el-aside>
        </pane>
    </splitpanes>
</template>


<script setup>
import {Splitpanes, Pane} from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import {defineProps, onMounted} from "vue";
import {defineSplitWidth} from "@/主窗口/js/layout";

defineProps(['compnts','height_right'])

//定义分割线宽度
defineSplitWidth()
</script>