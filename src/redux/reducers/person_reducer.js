import {ADD_PERSON} from '../constant'


const init = [];
export default function personReducer(pre=init,action){

    console.log(pre);

    let {type,data} = action;
    switch(type){
        case ADD_PERSON:
            return [data,...pre];
        //初始化为[]，也就是action的type是@@init~
        default:
            return pre;
    }
}