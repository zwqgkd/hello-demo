<template>
    <splitpanes>
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

        <pane>
            <el-aside width="99%">
                <component :is="props.compnts[0]"></component>
            </el-aside>
        </pane>
    </splitpanes>
</template>


<script setup>
import {Splitpanes, Pane} from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import {onMounted} from "vue";

const props = defineProps({
    compnts: Object,
    height_right: Number
})


onMounted(()=>{
    var splitItems=document.getElementsByClassName('splitpanes__splitter')
    for(let i=0;i<splitItems.length;i++){
        let h=splitItems[i].clientHeight,w=splitItems[i].clientWidth
        if(h>w){
            splitItems[i].style.width='5px'
        }else{
            splitItems[i].style.height='5px'
        }
    }
})
</script>