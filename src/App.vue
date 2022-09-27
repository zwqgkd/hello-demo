<template>
  <router-view></router-view>
</template>

<!-- <script>

  const MapData = [
    ['MSG_ENDLOGIN', '/main'],
    ['MSG_FILE', '/file'],
    ['MSG_OS', '/os'],
    ['MSG_VIEW', '/view'],
    ['MSG_ELSE', '/else'],
    ['MSG_LF', '']
  ]

  var m = new Map(MapData)

  export default {
    name: 'App',
    data() {
      return{
        m
      }
    }
  }

</script> -->

<script setup>
  const MapData = [
    ['MSG_ENDLOGIN', '/main'],
    ['MSG_FILE', '/file'],
    ['MSG_OS', '/os'],
    ['MSG_VIEW', '/view'],
    ['MSG_ELSE', '/else'],
    ['MSG_LF', '']
  ]

  var m = new Map(MapData)
  
</script>


<style>

</style>