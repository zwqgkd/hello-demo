import { ref } from 'vue'
import {jump} from '../../sys/jump'

function onLoginBtnClick(message) {

    jump(message)
}
export {onLoginBtnClick}