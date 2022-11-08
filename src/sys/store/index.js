//组装模块并导出 store 的地方
import {createStore} from 'vuex'

export default createStore({
    state(){
        return{
            vuexHelpInfo:'I am helpInfo from vuex'
        }
    },
    mutations:{
        changeVuexHelpInfo(state,payload){
            state.vuexHelpInfo=payload
        }
    },
    modules:{

    }
})
