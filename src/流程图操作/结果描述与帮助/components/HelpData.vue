<template>
    {{vuexHelpInfo}}
</template>

<!--<script setup>-->
<!--import { inject } from 'vue';-->
<!--const helpInfo = inject('helpInfo')//帮助显示区组件中注入帮助信息 -->
<!--</script>-->
<script>
import {mapState} from "vuex";

export default{
    inject:['helpInfo'],//帮助显示区组件中注入帮助信息
    computed:{
        ...mapState([
            "vuexHelpInfo"
        ])
    }
}
</script>