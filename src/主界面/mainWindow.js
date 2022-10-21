
import {ref} from "vue";
import ProcessDp from "@/流程图界面/ProcessDp.vue";
import ImageArea from "@/图片展示区/ImageArea.vue";
import ResultArea from "@/结果展示区/ResultArea.vue";
import LayoutOne from "@/主界面/components/layout/LayoutOne.vue";
import LayoutTwo from "@/主界面/components/layout/LayoutTwo.vue";
import LayoutThree from "@/主界面/components/layout/LayoutThree.vue";

//右半部分自适应高度
const height_right=ref(0)
height_right.value=window.innerHeight-82
function changeRightHeight(){
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
export {changeRightHeight,height_right,mainLayout,layout,compnts}



