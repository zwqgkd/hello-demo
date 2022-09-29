<template>


    <div class="common-layout">
        <img style="position:absolute;left:0px;top:0px" src="../imgs/logo_small.png" />
        <el-container>
            <el-header style="padding-left:0px;padding-right:0px;background-color:rgb(38, 13, 106);">


                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1" @click="newOpen"><span style="color:aliceblue;">文件</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="onMenuClick('MSG_OS')"><span style="color:aliceblue;">系统</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="onMenuClick('MSG_VIEW')"><span style="color:aliceblue;">视图</span>
                    </el-menu-item>
                    <el-menu-item index="4" @click="onMenuClick('MSG_ELSE')"><span style="color:aliceblue;">其他</span>
                    </el-menu-item>
                    <el-menu-item index="5" @click="onMenuClick('MSG_LF')"><span style="color:aliceblue;">流程图</span>
                    </el-menu-item>
                    <el-menu-item index="6" @click="onMenuClick('MSG_IMG')"><span style="color:aliceblue;">图片展示</span>
                    </el-menu-item>

                </el-menu>
            </el-header>

            <el-main>

                <router-view></router-view>

            </el-main>
        </el-container>
    </div>

</template>

<script setup>
    import { onMenuClick } from '../js/mainWindow'
    const newOpen = function () {
        window.open('#/file', '_blank', 'height=600,width=600');
    }
</script>


<style>
    .el-header {
        --el-header-height: 80px;
    }

    ul.el-menu.el-menu--horizontal.el-menu-demo {
        background-color: rgb(38, 13, 106);
        height: 100%;
        width: 90%;
        border-bottom: 0px;
        position: relative;
        left: 6%;

    }

    ul.el-menu.el-menu--horizontal.el-menu-demo :hover {
        background-color: rgb(23, 4, 73);
    }


    :root {
        --el-color-primary-light-9: rgb(51, 19, 138)
    }

    .el-main {
        padding: 0px;
    }
</style>