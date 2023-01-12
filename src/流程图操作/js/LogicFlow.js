import {Menu, BpmnElement, SelectionSelect, Control, Snapshot} from '@logicflow/extension'
import {lfJson2Xml} from '@logicflow/extension'
import {
    LogicFlow,
    PolygonNode,
    PolygonNodeModel,
    RectNode,
    RectNodeModel,
    DiamondNode,
    DiamondNodeModel,
    CircleNode,
    CircleNodeModel
} from '@logicflow/core'
import {LeftMenus} from './LeftMenuItems.js'
import {MiniMap} from './MiniMap.js'
import {eventHandle, events} from "../../sys/eventResponseController";

const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
//初始化socketio用于前后端传输
let socket = io.connect('http://localhost:9092')

//收到父页面传输的数据
window.addEventListener('message', function (messageEvent) {
        var data = messageEvent.data;
        console.log('收到vue的数据：', data);
    }
)

class CycleModel extends CircleNodeModel{
    getNodeStyle() {
        const style = super.getNodeStyle();
        style.stroke = 'blue';
        return style;
    }
    setAttributes() {
        const size = this.properties.scale || 1;
        this.r=25*size
    }
}

class SuanziModel extends RectNodeModel {
    setAttributes() {
        const size = this.properties.scale || 1;
        this.width = 100 * size
        this.height = 80 * size
    }
}

class ConditionJudgmentModel extends DiamondNodeModel {
    getNodeStyle() {
        const style = super.getNodeStyle();
        style.stroke = 'blue';
        return style;
    }
    setAttributes() {
        const size = this.properties.scale || 1;
        this.rx = 60 * size
        this.ry = 40 * size
    }
}


//读json文件
//法一
// $(document).ready(function(){
//     $.getJSON("operatorLib.json",function(result){
//         console.log(result)
//         //var obj = JSON.parse(result);
//         //console.log(obj)
//
//     });
// });

//法二
// fetch('')
//     .then((response) => response.json())
//     .then((json)=>console.log(json))

//法三
import data from './operatorLib.json'

const suanziItemList = data

export default {
    name: 'FlowDemo',
    data() {
        return {
            lf: null,
            initHeight: '',
            initData: null,
            nodeModel:'',
            edgeModel:'',
            //赋值变量 算子和图形
            suanzis: suanziItemList,
        }
    },
    computed:{
    },
    mounted() {
        this.initHeight = window.innerHeight
        this.init()
        //设置节点点击事件监听, 修改帮助信息
        this.lf.on('node:click', (evt) => {
            //刷新nodeModel
            this.nodeModel=this.lf.getNodeModelById(evt.data.id)
            let type=this.nodeModel.getProperties().type

            if(type=="conditionJudge"||type=="cycleStart"){
                window.open('#/conditionNode')
            }


            //调用事件响应函数，做出响应
            const msg_key = evt.data.properties.key
            eventHandle(events.msg_singleStepOpr, {msg_key})//单步运算->key

            //iframe给父组件传递消息方法
            window.parent.postMessage({nodeHelpMsg: evt.data.properties.helpMsg});
            console.log(JSON.stringify(evt.data.text.value) + " is clicked. run some method related to label or type or id... and it's properties taht we can modify are: " + JSON.stringify(data.data.properties))
            //原生修改html元素方法
            // window.parent.document.getElementById("pane-third").innerText = evt.data.properties.helpMsg

        })
        this.lf.on('edge:click',(evt)=>{
            window.open('#/conditionEdge')
            let edgeId=(evt.data.id)
            //获取边
            this.edgeModel=this.lf.getEdgeModelById(edgeId)

        })

        window.addEventListener('message', (evt) => {
            if(evt.data.flag){
                //修改边的文本
                this.edgeModel.updateText(evt.data.flag)
            }
            if(evt.data.conditionValue){
                //修改节点的值
                this.nodeModel.setProperties({
                    value:evt.data.conditionValue
                })
            }
        })
        window.onresize = () => {
            return (() => {
                this.initHeight = window.innerHeight
                this.lf.render(this.lf.getGraphData())
                const position = this.lf.getPointByClient(document.documentElement.clientWidth - 150, document.documentElement.clientHeight - 230)
                this.lf.extension.miniMap.show(position.domOverlayPosition.x, position.domOverlayPosition.y)
            })
        }
    },
    methods: {
        init() {
            const lf = new LogicFlow({
                container: document.querySelector("#lf"),
                height: this.initHeight,
                plugins: [Menu, BpmnElement, LeftMenus, SelectionSelect, Control, MiniMap, Snapshot],
                background: {
                    color: '#2b364a' // 网格背景颜色
                },
                keyboard: {
                    enabled: true // 支持快捷键操作
                },
                grid: { // 开启网格
                    type: 'mesh', // 网格类型为线状
                    size: 20,
                    visible: true // 是否可见
                }
            })

            lf.batchRegister([
                { // 圆形结点：标志循环开始循环结束
                    type: 'cycle',
                    view: CircleNode,
                    model: CycleModel
                },
                {
                    type: 'diamond',
                    view: DiamondNode,
                    model: ConditionJudgmentModel
                },
                {
                    type: 'operator',
                    view: RectNode,
                    model: SuanziModel
                }

            ])

            // 设置算子面板
            var suanziItemListConcat = []
            for (var i in suanziItemList) {
                suanziItemListConcat = suanziItemListConcat.concat(suanziItemList[i])
            }
            lf.extension.leftMenus.setPatternItems(suanziItemListConcat)


            // // 设置节点面板, 设置框选回调
            // suanziItemList['控制模块'][0].callback = () => {
            //     lf.openSelectionSelect();
            //     lf.once("selection:selected", () => {
            //         //lf.closeSelectionSelect();
            //     });
            // },


            lf.extension.control.addItem({
                text: "下载快照",
                onClick: () => {
                    this.downloadImage()
                }
            })
            lf.extension.control.addItem({
                text: "下载XML",
                onClick: () => {
                    this.downloadXML()
                }
            })

            const initData = {}

            lf.render(initData)
            const position = lf.getPointByClient(document.documentElement.clientWidth - 150, document.documentElement.clientHeight - 230)
            lf.extension.miniMap.show(position.domOverlayPosition.x, position.domOverlayPosition.y)
            this.lf = lf
            this.initData = initData

        },
        download(filename, text) {
            console.log(filename, text)
            var element = document.createElement("a")
            element.setAttribute(
                "href",
                "data:text/plain;charset=utf-8," + encodeURIComponent(text)
            )
            element.setAttribute("download", filename)

            element.style.display = "none"
            document.body.appendChild(element)

            element.click()

            document.body.removeChild(element)
        },
        downloadImage() {
            this.lf.getSnapshot()
        },
        downloadXML() {
            console.log(this.lf.getGraphData())
            this.download('flow.xml', lfJson2Xml(this.lf.getGraphData()))
            //前端开始运行逻辑不完善，因此将流程图json传到后端的语句写在这里了，以后实际开发的时候进行调整
            console.log(this.lf.getGraphData());
            socket.emit('flowInformation',this.lf.getGraphData());
        }
    },

    //////////////////////YUANZHENG SOCKETIO TEST/////////////////
    //此处为前后端通信函数，因为前端UI逻辑还未完善，先放在这里，以后用的时候进行调整
    //具体逻辑为socketio.emit('参数名',json格式的参数);后端建立对应的监听器接收并进行下一步处理
    //有问题问袁征
    socketioNum(){
        var jsonObject = {userName: "Num",
            message: 1024,
        };
        socket.emit('chatevent', jsonObject);
    },
    socketioInt(){
        var jsonObject = {userName: "Int",
            message: 2048,
        };
        socket.emit('chatevent', jsonObject);
    },
    socketioDou(){
        var jsonObject = {userName: "Dou",
            message: 10.24,
        };
        socket.emit('chatevent', jsonObject);
    },
    socketioFlt(){
        var jsonObject = {userName: "Flt",
            message: 102.4,
        };
        socket.emit('chatevent', jsonObject);
    },
    socketioStr(){
        var jsonObject = {userName: "Str",
            message: "Hello Yuan Zheng!!!!!!",
        };
        socket.emit('chatevent', jsonObject);
    },
    socketioPic(){
        let base64Img
        let Img = this.$refs.imgUrl.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(Img)
        reader.onload=function (){
            var jsonObject = {userName: "Pic",
                message: this.result,
            };
            base64Img = this.result
            socket.emit('chatevent', jsonObject);
            console.log(this.result)
        }
    }
    //////////////////////////////////////////////////////////////
}

