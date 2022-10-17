<template>
    <splitpanes>
        <pane>
            <el-aside width="99%">
                <component :is="props.compnts[0]"></component>
            </el-aside>
        </pane>
        <pane>

            <splitpanes horizontal :style="'height:'+height_right+'px'">
                <pane>
                    <component :is="props.compnts[1]"></component>
                </pane>
                <pane>
                    <component :is="props.compnts[2]"></component>
                </pane>
            </splitpanes>

        </pane>
    </splitpanes>
</template>


<script setup>
import {Splitpanes, Pane} from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
const props=defineProps({
    compnts:Object,
    height_right:Number
})
</script>