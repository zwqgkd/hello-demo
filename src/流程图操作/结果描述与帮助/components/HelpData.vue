<template>    
    
    <button v-on:click="helpInfo='bb'">清除信息</button>
    {{helpInfo}}

</template>

<script setup>

import {ref} from 'vue'
import emitter from '../../../sys/emiter.js'

var helpInfo = ref("")

//emitter 接受的信息
emitter.on('refresh_help_msg', (e) => {helpInfo.value = e} )
</script>