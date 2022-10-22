import router from "./router";


//路由映射表
const MapData = [
    ['MSG_ENDLOGIN', '/main'],
    ['MSG_FILE', '/file'],
    ['MSG_OS', '/os'],
    ['MSG_VIEW', '/view'],
    ['MSG_ELSE', '/else'],
    ['MSG_LF', '/processDp'],
    ['MSG_IMG', '/img'],
]
var m = new Map(MapData)

function jump(message){
    let adr=m.get(message)
    router.push(adr)
}
export {jump}





