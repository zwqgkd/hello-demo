
import {ref} from "vue";
import ProcessDp from "@/流程图操作/ProcessDp.vue";
import ImageArea from "@/图像操作/ImageArea.vue";
import ResultArea from "@/流程图操作/结果描述与帮助/ResultArea.vue";
import LayoutOne from "@/主窗口/components/layout/LayoutOne.vue";
import LayoutTwo from "@/主窗口/components/layout/LayoutTwo.vue";
import LayoutThree from "@/主窗口/components/layout/LayoutThree.vue";

//右半部分自适应高度
const height_right=ref(0)
height_right.value=window.innerHeight-82
function dynamicRightHeight(){
    height_right.value=window.innerHeight-82
}


//动态布局
const compnts = ref([
    ProcessDp,
    ImageArea,
    ResultArea
])
const mainLayout=ref(LayoutOne)
function layout(i) {
    switch (i) {
        case 1:
            mainLayout.value=LayoutTwo
            break;
        case 2:
            mainLayout.value=LayoutThree
            break;
        default:
            mainLayout.value=LayoutOne
    }
}
export {dynamicRightHeight,height_right,mainLayout,layout,compnts}



