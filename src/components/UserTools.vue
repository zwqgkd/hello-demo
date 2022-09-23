<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">

        <el-sub-menu index="1">
            <template #title>
                <el-icon style="color: aliceblue;">
                    <CameraFilled />
                </el-icon>
                <span style="color:aliceblue;">相机</span>
            </template>

            <el-menu-item index="1-1">输入图像</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="2">
            <el-icon style="color: aliceblue;">
                <Filter />
            </el-icon>
            <template #title>
                <span style="color:aliceblue;">滤波</span></template>
        </el-menu-item>
        <el-menu-item index="3">
            <el-icon style="color: aliceblue;">
                <document />
            </el-icon>
            <template #title><span style="color:aliceblue;">二值化</span></template>
        </el-menu-item>

        <el-sub-menu index="4">
            <template #title>
                <el-icon style="color: aliceblue;">
                    <Grid />
                </el-icon>

                <span style="color:aliceblue;">扩展</span>
            </template>
            <el-menu-item index="4-1">条件检测</el-menu-item>
            <el-menu-item index="4-2">输出图像</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>


<script setup>
    import { ref } from 'vue'


    const isCollapse = ref(true)

</script>

<style>
    .el-menu-vertical-demo {
        width: 100px;
        min-height: 400px;
        background-color: rgb(38, 13, 106);
    }

    ul.el-menu.el-menu--vertical.el-menu-vertical-demo {
        height: 100%;
    }
</style>