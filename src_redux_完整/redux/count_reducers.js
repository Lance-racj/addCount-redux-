import {ADD,NOADD} from './constant'

export default function countReducer(pre,action){
    let {type,data} = action;
    switch(type){
        case ADD:
            return pre+data;
        case NOADD:
            return pre-data;
        //初始化为0，也就是action的type是@@init~
        default:
            return 0;
    }
}