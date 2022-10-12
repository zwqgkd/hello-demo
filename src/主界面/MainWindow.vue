<template>
  <div class="common-layout">
    <img
      style="position: absolute; left: 0px; top: 0px"
      src="./img/logo_small.png"
    />
    <el-container>
      <!--                        <el-header style="padding-left:0px;padding-right:0px;background-color:rgb(38, 13, 106);">-->
      <!--                            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
      <!--                                <el-menu-item index="1" @click="newOpen"><span style="color:aliceblue;">文件</span>-->
      <!--                                </el-menu-item>-->
      <!--                                <el-menu-item index="2" @click="onMenuClick('MSG_OS')"><span style="color:aliceblue;">系统</span>-->
      <!--                                </el-menu-item>-->
      <!--                                <el-menu-item index="3" @click="onMenuClick('MSG_VIEW')"><span style="color:aliceblue;">视图</span>-->
      <!--                                </el-menu-item>-->
      <!--                                <el-menu-item index="4" @click="onMenuClick('MSG_ELSE')"><span style="color:aliceblue;">其他</span>-->
      <!--                                </el-menu-item>-->
      <!--                                <el-menu-item index="5" @click="onMenuClick('MSG_LF')"><span style="color:aliceblue;">流程图</span>-->
      <!--                                </el-menu-item>-->
      <!--                                <el-menu-item index="6" @click="onMenuClick('MSG_IMG')"><span style="color:aliceblue;">图片展示</span>-->
      <!--                                </el-menu-item>-->
      <!--                            </el-menu>-->
      <!--                        </el-header>-->

      <el-header
        style="
          padding-left: 0px;
          padding-right: 0px;
          background-color: rgb(38, 13, 106);
        "
      >
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <!-- <el-sub-menu index="1">
                        <template #title><span style="color:aliceblue">文件</span></template>
                        <el-menu-item><span>1-1</span></el-menu-item>
                        <el-menu-item><span>1-2</span></el-menu-item>
                        <el-sub-menu>
                            <template #title>1-3</template>
                            <el-menu-item><span>1-3-1</span></el-menu-item>
                            <el-menu-item><span>1-3-2</span></el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu> -->

          <el-dropdown trigger="click">
            <span class="main-menu01">文件</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled">
                  Action 2
                </el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
                <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
                <el-dropdown-item :icon="CircleCheck"
                  >Action 5</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <el-dropdown trigger="click">
            <span class="main-menu01">系统</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled">
                  Action 2
                </el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
                <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
                <el-dropdown-item :icon="CircleCheck"
                  >Action 5</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <el-dropdown trigger="click">
            <span class="main-menu01">视图</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled">
                  Action 2
                </el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
                <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
                <el-dropdown-item :icon="CircleCheck"
                  >Action 5</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <el-dropdown trigger="click">
            <span class="main-menu01">其他</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled">
                  Action 2
                </el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
                <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
                <el-dropdown-item :icon="CircleCheck"
                  >Action 5</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <el-dropdown trigger="click">
            <span class="main-menu01">流程图</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled">
                  Action 2
                </el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
                <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
                <el-dropdown-item :icon="CircleCheck"
                  >Action 5</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <el-dropdown trigger="click">
            <span class="main-menu01">布局</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled">
                  Action 2
                </el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
                <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
                <el-dropdown-item :icon="CircleCheck"
                  >Action 5</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
<!-- 
          <el-menu-item index="2"
            ><span style="color: aliceblue">系统</span></el-menu-item
          >

          <el-sub-menu index="3">
            <template #title
              ><span style="color: aliceblue">视图</span></template
            >
            <el-menu-item><span>1-1</span></el-menu-item>
            <el-sub-menu>
              <template #title>1-2</template>
              <el-menu-item><span>1-2-1</span></el-menu-item>
            </el-sub-menu>
          </el-sub-menu>

          <el-menu-item index="4"
            ><span style="color: aliceblue">其他</span>
          </el-menu-item>
          <el-menu-item index="5"
            ><span style="color: aliceblue" @click="onMenuClick('MSG_LF')"
              >流程图</span
            >
          </el-menu-item>

          <el-sub-menu index="6">
            <template #title
              ><span style="color: aliceblue">布局</span></template
            >
            <el-menu-item @click="layout1"><span>1-1</span></el-menu-item>
          </el-sub-menu> -->
        </el-menu>
      </el-header>

      <el-main class="main-window-content">
        <el-container>
          <el-aside width="50%">
            <component :is="compnts[0]"></component>
          </el-aside>

          <el-container>
            <!--                        图片展示区-->
            <el-header height="50%">
              <component :is="compnts[1]"></component>
            </el-header>
            <!--                        结果展示区-->
            <el-main>
              <component :is="compnts[2]"></component>
            </el-main>
          </el-container>
        </el-container>
        <!--                <router-view></router-view>-->
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { onMenuClick } from "./mainWindow.js";
import ProcessDp from "@/流程图界面/ProcessDp.vue";
import PicWindow from "@/图片展示区/PicWindow.vue";
import ResultWindow from "@/结果展示区/ResultWindow.vue";
import { ref } from "vue";

let compnts = ref([ProcessDp, PicWindow, ResultWindow]);
const triggerMethod = ref(true);

function changeTriggerMethod() {
  triggerMethod.value = !triggerMethod.value;
}

function layout1() {
  compnts.value[0] = ProcessDp;
  compnts.value[1] = ResultWindow;
  compnts.value[2] = PicWindow;
}

// import {onMounted} from "vue";
// onMounted(()=>{
//
// })
// const newOpen = function () {
//     window.open('#/file', '_blank', 'height=600,width=600');
// }
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
  --el-color-primary-light-9: rgb(51, 19, 138);
}

.el-main {
  padding: 0px;
}

.main-menu01{
    color: aliceblue; 
    line-height: 78px;
    width: 70px;
    text-align:center
}
</style>