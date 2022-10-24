<template>

    <div class="common-layout">
        <img style="position:absolute;left:0px;top:0px" src="./img/logo_small.png"/>
        <el-container>
            <el-header style="padding-left:0px;padding-right:0px;background-color:rgb(8,36,105);">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                         @select="handleSelect">
                    <el-sub-menu index="1">
                        <template #title><span style="color:aliceblue;">文件</span></template>
                        <el-menu-item value="1-1" @click="eventResponse('newSolution', {})"><span style="color:aliceblue;">新建方案</span></el-menu-item>
                        <el-menu-item><span style="color:aliceblue;">打开方案</span></el-menu-item>
                        <el-sub-menu>
                            <template #title><span style="color:aliceblue;">打开最进方案</span></template>
                            <el-menu-item><span style="color:aliceblue;">最近方案一</span></el-menu-item>
                            <el-menu-item><span style="color:aliceblue;">最近方案二</span></el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>

                    <el-sub-menu index="2">
                        <template #title><span style="color:aliceblue;">系统</span></template>
                        <el-menu-item><span style="color:aliceblue;">1-1</span></el-menu-item>
                        <el-sub-menu>
                            <template #title><span style="color:aliceblue;">1-2</span></template>
                            <el-menu-item><span style="color:aliceblue;">1-2-1</span></el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>

                    <el-sub-menu index="3">
                        <template #title><span style="color:aliceblue;">视图</span></template>
                        <el-menu-item><span style="color:aliceblue;">1-1</span></el-menu-item>
                        <el-sub-menu>
                            <template #title><span style="color:aliceblue;">1-2</span></template>
                            <el-menu-item><span style="color:aliceblue;">1-2-1</span></el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>

                    <el-sub-menu index="4">
                        <template #title><span style="color:aliceblue;">其他</span></template>
                        <el-menu-item><span style="color:aliceblue;">1-1</span></el-menu-item>
                        <el-sub-menu>
                            <template #title><span style="color:aliceblue;">1-2</span></template>
                            <el-menu-item><span style="color:aliceblue;">1-2-1</span></el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>

                    <el-sub-menu index="6">
                        <template #title><span style="color:aliceblue">布局</span></template>
                        <el-menu-item @click="layout(0)"><span style="color:aliceblue;">布局一</span></el-menu-item>
                        <el-menu-item @click="layout(1)"><span style="color:aliceblue;">布局二</span></el-menu-item>
                        <el-menu-item @click="layout(2)"><span style="color:aliceblue;">布局三</span></el-menu-item>
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
import {dynamicRightHeight,height_right,mainLayout,layout,compnts} from './js/mainWindow.js'
import {eventResponse} from "@/sys/eventResponseController"
window.addEventListener('resize',dynamicRightHeight)
</script>


<style>

.el-header {
    --el-header-height: 80px;
}

.common-layout {
    height: 100%;
}


ul.el-menu.el-menu--horizontal.el-menu-demo {
    background-color: rgb(8,36,105);
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
    background-color: rgb(121, 187, 255);
}

:root {
    --el-color-primary-light-9: rgb(8,36,105);
    --el-color-primary: rgb(8,36,105);
    --el-menu-bg-color: rgb(8,36,105);
    --el-menu-hover-bg-color:rgb(121, 187, 255)
}
.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-sub-menu__title{
    background-color:rgb(8,36,105)
}


.el-main {
    padding: 0px;
}

ul.el-menu.el-menu--horizontal.el-menu-demo1 {
    background-color: rgb(8,36,105);
    margin-right: 0;
    height: 60%;
    width: 94%;
    border-bottom: 0px;
    position: relative;
    left: 6%;
}

ul.el-menu.el-menu--horizontal.el-menu-demo1 :hover {
    background-color: rgb(121, 187, 255);
}


</style>