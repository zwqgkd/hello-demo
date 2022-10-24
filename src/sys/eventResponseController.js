import {function_NS} from './responseFunctionDefinition.js'
const V2F_Mapping={
    'newSolution':function_NS,
}

export function eventResponse(responseType, paras){
    const func = V2F_Mapping[responseType]
    if(func!==undefined&&typeof func === 'function'){
        func(paras)
    }
}