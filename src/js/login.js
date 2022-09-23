import { ref } from 'vue'
import router from '../router/router';
const account = ref()
const password = ref()
function userVerify() {
    console.log(1111)
    console.log(account, password)
    router.push('/main')
}
export {account,password,userVerify}