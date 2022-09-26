<template>
    <!-- 快速工具栏 -->
    <div class="tool-bar">
        <div class="tb-item">
            <button>
                <el-icon>
                    <Back />
                </el-icon>
                <div><span style="font-size:10% ;">撤回</span></div>
            </button>
        </div>

        <div class="tb-item">
            <button>
                <el-icon>
                    <CaretRight />
                </el-icon>
                <div><span style="font-size:10% ;">单次运行</span></div>
            </button>

        </div>
        <div class="tb-item">
            <button>
                <el-icon>
                    <Refresh />
                </el-icon>
                <div><span style="font-size:10% ;">循环运行</span></div>
            </button>

        </div>
        <div class="tb-item">
            <button>
                <el-icon>
                    <Right />
                </el-icon>
                <div><span style="font-size:10% ;">恢复</span></div>
            </button>
        </div>

    </div>
</template>


<script setup>
</script>

<style scoped>
    .tool-bar {
        z-index: 999;
        background-color: rgb(244, 247, 250);
        width: 60%;
        height: 5%;
        border-radius: 10px;
        box-shadow: 2px 2px 10px rgb(162, 162, 221);
        text-align: center;
        position: relative;
        top: 70%;
        left: 15%;
    }

    .tb-item {
        width: 25%;
        float: left;
        top: 30%
    }

    button {
        border: 0px;
        background-color: rgb(244, 247, 250);
    }
</style>