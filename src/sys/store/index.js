//组装模块并导出 store 的地方
import {createStore} from 'vuex'
import test from './mudules/test'
export default createStore({
    state(){
        return{
            vuex_demo:1
        }

    },
    modules:{

    }
})
