<template>
    <div>
        <div class="head-btn-box">
            <el-button icon="zoom-in" @click="toBIgChange">放大</el-button>
            <el-button icon="zoom-out" @click="toSmallChange">缩小</el-button>
            <el-button icon="RefreshLeft" @click="toReset">恢复</el-button>
            <el-button icon="FullScreen" @click="onPreview(img)">全屏</el-button>
        </div>
        <img
            src="./img/a.jpg"
            class="img"
            :style="{transform:'scale('+multiples+')'}"
        />
        <el-image-viewer
            v-if="showViewer"
            :on-close="closeViewer"/>
    </div>
</template>

<script>


export default {
    name:"Index",
    data () {
        return {
            url: '',
            multiples: 1,
            showViewer:false,
        }
    },

    methods: {

        toBIgChange () {
            if (this.multiples >= 2) {
                return
            }
            this.multiples += 0.25
        },
        // 缩小
        toSmallChange () {
            if (this.multiples <= 0.5) {
                return
            }
            this.multiples -= 0.25
        },
        toReset(){
            this.multiples = 1
        },
        onPreview(img){
            this.url = img
            this.showViewer =true
        },
        closeViewer() {
            this.showViewer =false
        },
    }
}

</script>
<style scoped>
.head-btn-box {
    margin-bottom: 20px;
}
.img {
    width: 200px;
}

</style>


