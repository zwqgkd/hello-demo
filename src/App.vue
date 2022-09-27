<template>
  <router-view></router-view>
</template>

<script>

var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]])

  export default {
    name: 'App',
    data() {
        return {
            isCollapse: true,
            MyEvent:{
                MSG_ENDLOGIN:0,
                mm: 'string'
            },
            a:[
                {
                    key:MSG_ENDLOGIN,
                    value:'file'
                },
                {
                    key:'keyname2',
                    value:1
                }
            ],
            m
        }
    },
  }
</script>

  
<style>

</style>