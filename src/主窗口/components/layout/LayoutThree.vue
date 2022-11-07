<template>

    <splitpanes horizontal :style="'height:'+height_right+'px'">

        <pane >
            <component :is="compnts[0]"></component>

        </pane>
        <hr>
        <pane>
            <splitpanes>
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
import {defineSplitWidth} from "@/主窗口/js/layout";

defineProps(['compnts','height_right'])

//定义分割线宽度
defineSplitWidth()

</script>

<style>
.splitpanes__splitter{
    border: 2px;
    background-color: #6c757d;
}
</style>