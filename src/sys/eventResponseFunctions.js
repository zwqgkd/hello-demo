import {function1_1} from './mappingTableFunctions.js'
const V2F_Mapping={
    '1-1':function1_1,
}

export function eventResponse(funcName, obj){
    const func = V2F_Mapping[funcName]
    if(func!==undefined&&typeof func === 'function'){
        func(obj)
    }
}