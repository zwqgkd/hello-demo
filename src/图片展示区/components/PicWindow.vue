<template>
    <div>
        <div class="head-btn-box">
            <el-button icon="zoom-in" @click="toBIgChange"></el-button>
            <el-button icon="zoom-out" @click="toSmallChange"></el-button>
            <el-button icon="RefreshLeft" @click="toReset"></el-button>
            <el-button icon="FullScreen" @click="onPreview"></el-button>
            <el-button icon="getUrl" @click="getUrl">网络请求</el-button>
        </div>
        <img
            :src="imgUrl"
            alt="a cat"
            class="img"
            :style="{transform:'scale('+multiples+')'}"
        />
      <span>{{imgUrl}}</span>
        <el-image-viewer
            v-if="showViewer"
            :src="imgUrl"
            :on-close="closeViewer"/>
    </div>
</template>

<script src="./picWindow.js">
</script>


<style scoped>
.head-btn-box {
    margin-bottom: 20px;
}
.img {
    width: 200px;
}

</style>


