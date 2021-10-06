

export default function countReducer(pre,action){
    let {type,data} = action;
    switch(type){
        case 'add':
            return pre+data;
        case 'noadd':
            return pre-data;
        //初始化为0，也就是action的type是@@init~
        default:
            return 0;
    }
}