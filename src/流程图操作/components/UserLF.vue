<template>
    <el-container>
        <el-aside style="width:fit-content">
            <el-menu class="el-menu-vertical" :collapse="true">
                <!--算子菜单块-->
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>suanzi panel</span>
                    </template>
                    <el-menu-item-group>
                        <!--vue 插入元素-->
                        <el-menu-item v-for="(suanzi, index) in suanzis" :index="'suanzi'+index" :id="suanzi.id"></el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                <!--图形工具菜单块-->
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>tools panel</span>
                    </template>
                    
                    <el-menu-item-group>
                        <!--vue 插入元素-->
                        <el-menu-item v-for="(flowChart, index) in flowCharts" :index="'flow'+index" :id="flowChart.id">
                        </el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
            </el-menu>
        </el-aside>

        <!--流程图区域-->
        <el-main id="lf" style="height: 100%; padding: 0;"></el-main>
    </el-container>



</template>

<script src="../js/UserLF.js">

</script>

<style>
.el-menu-vertical:not(.el-menu--collapse) {
    width: 180px;
    min-height: 400px;
}

.el-menu--popup{
    min-width: 180px;
    width: 180px;
}
.el-menu-item {
    display: inline-table;
    padding: 2px;
    width: 57px;
    min-width: 57px;
}

.lf-dnd-text {
    font-size: 5px;
    font-weight: bold;
    text-align: bottom;
    height: 30px;
}

.lf-mini-map-header {
    visibility: hidden;
}

/* 禁用侧边栏文字选中*/
.lf-dnd-text {
    user-select: none;
    /* CSS3属性 */
}
</style>