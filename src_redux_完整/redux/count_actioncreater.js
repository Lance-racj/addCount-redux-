import {ADD,NOADD} from './constant'
//创建一个加的action对象
/* 当传入的参数只有一个时，可以去掉括号，当函数语句只有一句时，可以去掉花括号 */
export let createAddAction=(data)=>{
    return {type:ADD,data:data}
}
//创建一个减的action对象
export let createnoAddAction=(data)=>{
    return {type:NOADD,data:data}
}