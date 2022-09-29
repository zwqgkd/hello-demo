import { ref } from 'vue'
import {jump} from './jump'
const account = ref()
const password = ref()
function onLoginBtnClick(message) {
    console.log(account, password)
    jump(message)
}
export {account,password,onLoginBtnClick}