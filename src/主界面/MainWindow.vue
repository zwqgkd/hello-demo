<template>

    <div class="common-layout">
        <img style="position:absolute;left:0px;top:0px" src="./img/logo_small.png"/>
        <el-container>
            <el-header style="padding-left:0px;padding-right:0px;background-color:rgb(38, 13, 106);">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                         @select="handleSelect">
                    <el-sub-menu index="1">
                        <template #title><span style="color:aliceblue">文件</span></template>
                        <el-menu-item value="1-1" @click="eventResponse('1-1', {})"><span>1-1</span></el-menu-item>
                        <el-menu-item><span>1-2</span></el-menu-item>
                        <el-sub-menu>
                            <template #title>1-3</template>
                            <el-menu-item><span>1-3-1</span></el-menu-item>
                            <el-menu-item><span>1-3-2</span></el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>

                    <el-menu-item index="2"><span style="color:aliceblue;">系统</span></el-menu-item>

                    <el-sub-menu index="3">
                        <template #title><span style="color:aliceblue">视图</span></template>
                        <el-menu-item><span>1-1</span></el-menu-item>
                        <el-sub-menu>
                            <template #title>1-2</template>
                            <el-menu-item><span>1-2-1</span></el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>

                    <el-menu-item index="4"><span style="color:aliceblue;">其他</span>
                    </el-menu-item>
                    <el-menu-item index="5"><span style="color:aliceblue;" @click="onMenuClick('MSG_LF')">流程图</span>
                    </el-menu-item>

                    <el-sub-menu index="6">
                        <template #title><span style="color:aliceblue">布局</span></template>
                        <el-menu-item @click="layout(0)"><span>1-1</span></el-menu-item>
                        <el-menu-item @click="layout(1)"><span>1-2</span></el-menu-item>
                        <el-menu-item @click="layout(2)"><span>1-3</span></el-menu-item>
                    </el-sub-menu>

                </el-menu>

                <el-menu :default-active="activeIndex" class="el-menu-demo1" mode="horizontal"
                         @select="handleSelect">

                    <el-menu-item index="1">
                        <el-icon style="color:aliceblue;">
                            <House/>
                        </el-icon>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <el-icon style="color:aliceblue;">
                            <Minus/>
                        </el-icon>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <el-icon style="color:aliceblue;">
                            <CirclePlus/>
                        </el-icon>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <el-icon style="color:aliceblue;">
                            <Search/>
                        </el-icon>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <el-icon style="color:aliceblue;">
                            <Aim/>
                        </el-icon>
                    </el-menu-item>
                </el-menu>

            </el-header>


            <el-main class="main-window-content">

                <component :is="mainLayout" :compnts="compnts" :height_right="height_right"></component>

            </el-main>
        </el-container>
    </div>

</template>

<script setup>

import {onMenuClick} from './mainWindow.js'
import ProcessDp from '@/流程图界面/ProcessDp.vue'
import ImageArea from "@/图片展示区/ImageArea.vue";
import ResultWindow from "@/结果展示区/ResultWindow.vue";
import {ref} from 'vue'
import LayoutOne from "@/主界面/components/layout/LayoutOne.vue";
import LayoutTwo from "@/主界面/components/layout/LayoutTwo.vue";
import LayoutThree from "@/主界面/components/layout/LayoutThree.vue";

import {eventResponse} from "../eventResponseFunctions.js"


//右半部分自适应高度
const height_right=ref(0)
height_right.value=window.innerHeight-82
window.addEventListener('resize',()=>{

    height_right.value=window.innerHeight-82
})

//动态布局
const compnts = ref([
    ProcessDp,
    ImageArea,
    ResultWindow
])
var mainLayout=ref(LayoutOne)
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
</script>


<style>
.el-header {
    --el-header-height: 80px;
}

.common-layout {
    height: 100%;
}


ul.el-menu.el-menu--horizontal.el-menu-demo {
    background-color: rgb(38, 13, 106);
    margin-right: 0;
    height: 40%;
    width: 94%;
    border-bottom: 1px solid #f6f2f2;
    position: relative;
    left: 6%;
}

.el-menu-demo1 span {
    height: 100%;
}

ul.el-menu.el-menu--horizontal.el-menu-demo :hover {
    background-color: rgb(23, 4, 73);
}

:root {
    --el-color-primary-light-9: rgb(38, 13, 106);
    --el-color-primary: rgb(38, 13, 106)
}

.el-main {
    padding: 0px;
}

ul.el-menu.el-menu--horizontal.el-menu-demo1 {
    background-color: rgb(38, 13, 106);
    margin-right: 0;
    height: 60%;
    width: 94%;
    border-bottom: 0px;
    position: relative;
    left: 6%;
}

ul.el-menu.el-menu--horizontal.el-menu-demo1 :hover {
    background-color: rgb(23, 4, 73);
}

</style>