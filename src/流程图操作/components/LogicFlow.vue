<template>
    <el-container>
        <el-aside style="width:100px">
            <el-menu class="el-menu-vertical" :collapse="true" style="width: 100px">
                <!--遍历添加算子菜单块-->
                <el-sub-menu v-for="(value, key, index1) in suanzis" :index="index1">
                    <template #title>
                        {{key}}
                    </template>
                    <el-menu-item-group>
                        <!--vue 插入元素-->
                        <el-menu-item v-for="(suanziItem, index2) in value" :index="'suanzi' + index1 + '-' + index2" :id="suanziItem.id">
                        </el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
            </el-menu>
        </el-aside>

        <!--流程图区域-->
        <el-main id="lf" style="height: 100%; padding: 0;"></el-main>

    </el-container>



</template>

<script src="../js/LogicFlow.js">

</script>

<style>
.el-menu-vertical:not(.el-menu--collapse) {
    width: 180px;
    min-height: 400px;
}

.el-menu--popup {
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