<template>
    {{vuexHelpInfo}}
</template>

<!--<script setup>-->
<!--import { inject } from 'vue';-->
<!--const helpInfo = inject('helpInfo')//帮助显示区组件中注入帮助信息 -->
<!--</script>-->
<script>
import {mapState} from "vuex";

<<<<<<< HEAD
export default{
    inject:['helpInfo'],//帮助显示区组件中注入帮助信息
    computed:{
        ...mapState([
            "vuexHelpInfo"
        ])
    }
}
=======
import {ref} from 'vue'
import emitter from '../../../sys/emiter.js'
import { inject } from 'vue';

var helpInfo = ref("")
var globalVariabales = inject('global')

//emitter 接受的信息
emitter.on('refresh_help_msg', (e) => {helpInfo.value = e; console.log(globalVariabales)} )
>>>>>>> 5fc4774a2367a1d8bfb53ac9178d8d25de399b8e
</script>