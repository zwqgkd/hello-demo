import router from '../router/router';
import MyEvent from '../hw'

// enum MyEvent {
//     MSG_ENDLOGIN
// }
const MyEvent={
    MSG_ENDLOGIN:0,
    M:1
}


function ff(message) {
    router.push('/os')
}
function warn(message, event) {
    // 这里可以访问原生事件
    // if (event) {
    //   event.preventDefault()
    // }
    //alert(this.MyEvent.MSG_ENDLOGIN)
    alter(MyEvent.M)
}

export default { warn }




