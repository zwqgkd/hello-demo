<template>    
    
    <button v-on:click="helpInfo=''">清除信息</button>
    {{helpInfo}}

</template>

<script setup>
defineProps(['helpInfo'])

</script>