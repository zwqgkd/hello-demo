import UserTools from '@/components/UserTools.vue';
import ProcessDp from '@/components/ProcessDp.vue';
import PictureDp from '@/components/PictureDp.vue';

export default {
    data(){
        return{
            isCollapse:true
        }
    },
    name: "UserMain",
    components: {
        UserTools,
        ProcessDp,
        PictureDp
    }
}
