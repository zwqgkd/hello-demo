<template>
    <div>
        <div class="head-btn-box">
            <el-button icon="zoom-in" @click="toBIgChange"></el-button>
            <el-button icon="zoom-out" @click="toSmallChange"></el-button>
            <el-button icon="RefreshLeft" @click="toReset"></el-button>
            <el-button icon="FullScreen" @click="onPreview(img)"></el-button>
        </div>
        <img
            src="../img/a.jpg"
            alt="a cat"
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
        //放大
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
      //复原图像
        toReset(){
            this.multiples = 1
        },
      //全屏预览图像
        onPreview(img){
            this.url = img
            this.showViewer =true
        },
      //关闭全屏预览
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


