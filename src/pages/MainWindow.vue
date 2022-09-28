<template>


    <div class="common-layout">
        <img style="position:absolute;left:0px;top:0px" src="../imgs/logo_small.png" />
        <el-container>
            <el-header style="padding-left:0px;padding-right:0px;background-color:rgb(38, 13, 106);">


                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1" @click="goTo('MSG_FILE')"><span style="color:aliceblue;">文件</span></el-menu-item>
                    <el-menu-item index="2" @click="goTo('MSG_OS')"><span style="color:aliceblue;">系统</span></el-menu-item>
                    <el-menu-item index="3" @click="goTo('MSG_VIEW')"><span style="color:aliceblue;">视图</span></el-menu-item>
                    <el-menu-item index="4" @click="goTo('MSG_ELSE')"><span style="color:aliceblue;">其他</span></el-menu-item>
                    <el-menu-item index="5" @click="goTo('MSG_LF')"><span style="color:aliceblue;">流程图</span></el-menu-item>
                    <el-menu-item index="6" @click="goTo('MSG_IMG')"><span style="color:aliceblue;">图片展示</span></el-menu-item>

                </el-menu>
            </el-header>

            <el-main>

                <router-view></router-view>

            </el-main>
        </el-container>
    </div>

</template>

<script setup>
    import {goTo} from '../js/mainWindow'
</script>


<style src="../css/mainWindow.css">

</style>