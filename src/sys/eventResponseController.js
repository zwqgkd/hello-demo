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

export function eventResponse(responseType, paras){   //事件触发后的响应函数
    const func = V2F_Mapping[responseType]
    if(func!==undefined&&typeof func === 'function'){
        func(paras)
    }
}