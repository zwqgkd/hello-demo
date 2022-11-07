import {function_NS} from './responseFunctionDefinition.js'  //将函数的定义引入
const V2F_Mapping={  //key为被触发事件的类型，value为对应应该运行的函数
    'newSolution':function_NS,
}

export function eventResponse(responseType, paras){   //事件触发后的响应函数
    const func = V2F_Mapping[responseType]
    if(func!==undefined&&typeof func === 'function'){
        func(paras)
    }
}