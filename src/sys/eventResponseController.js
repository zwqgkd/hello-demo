import {function_nS,function_mF,function_bF,function_gF,function_sobel,function_lapras,function_canny} from './responseFunctionDefinition.js'  //将函数的定义引入
const V2F_Mapping={  //key为被触发事件的类型，value为对应应该运行的函数
    'newSolution':function_nS,
    "meanFiltering":function_mF,
    "gaussianFiltering":function_gF,
    "bilateralFiltering":function_bF,
    "sobel":function_sobel,
    "lapras":function_lapras,
    "canny":function_canny,
}

//存储事件类型
export const msg_eventType={
    msg_oneStepCalculation:1,   //事件定义：单步计算
    msg_menuBar:2,               //事件定义：菜单栏事件
}

//事件管理函数
export function eventHandle(event, paras){   //事件触发后的响应函数
    let eventResponse
    switch(event){
        case msg_eventType.msg_oneStepCalculation:  //单步计算算子
            eventResponse = V2F_Mapping[paras.msg_key]
            if(eventResponse!==undefined&&typeof eventResponse === 'function'){
                eventResponse(paras)
            }
            break;
        case msg_eventType.msg_menuBar:
            eventResponse = V2F_Mapping[paras.msg_key]
            if(eventResponse!==undefined&&typeof eventResponse === 'function'){
                eventResponse(paras)
            }
            break;
        default:
            //.....
    }
}