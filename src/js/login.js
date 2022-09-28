import { ref } from 'vue'
import {jump} from './jump'
const account = ref()
const password = ref()
function userVerify(message) {
    console.log(account, password)
    jump(message)
}
export {account,password,userVerify}