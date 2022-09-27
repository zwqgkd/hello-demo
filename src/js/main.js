import UserTools from '@/components/UserTools.vue';
import ProcessDp from '@/components/ProcessDp.vue';
import PictureDp from '@/components/PictureDp.vue';



var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]])

export default {
    data() {
        return {
            isCollapse: true,
            // MyEvent:{
            //     MSG_ENDLOGIN:0,
            //     mm: 'string'
            // },
            // a:[
            //     {
            //         key:MSG_ENDLOGIN,
            //         value:'file'
            //     },
            //     {
            //         key:'keyname2',
            //         value:1
            //     }
            // ],
            m
        }
    },
    name: "UserMain",
    components: {
        UserTools,
        ProcessDp,
        PictureDp
    },

    methods: {
        warn(message, event) {
            alert(message)
        }
    },
}
