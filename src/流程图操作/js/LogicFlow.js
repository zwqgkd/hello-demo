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
            flag:'',
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

        this.lf.on('edge:click',(evt)=>{

            window.open('#/conditionJudge')
            let edgeId=(evt.data.id)
            console.log(edgeId)
            //获取边
            this.edgeModel=this.lf.getEdgeModelById(edgeId)

        })
        window.addEventListener('message', (evt) => {
            this.flag=evt.data.flag
            console.log(this.flag)
            this.edgeModel.updateText(this.flag)
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
            //设置节点点击事件监听, 修改帮助信息
            lf.on('node:click', (data) => {
                //调用事件响应函数，做出响应
                const msg_key = data.data.properties.key
                eventHandle(events.msg_singleStepOpr, {msg_key})//单步运算->key

                //iframe给父组件传递消息方法
                window.parent.postMessage({nodeHelpMsg: data.data.properties.helpMsg});
                console.log(JSON.stringify(data.data.text.value) + " is clicked. run some method related to label or type or id... and it's properties taht we can modify are: " + JSON.stringify(data.data.properties))
                //原生修改html元素方法
                // window.parent.document.getElementById("pane-third").innerText = data.data.properties.helpMsg

            })

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
            this.download('flow.xml', lfJson2Xml(this.lf.getGraphData()))
        }
    },

}

