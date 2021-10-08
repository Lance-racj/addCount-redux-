import {ADD_PERSON} from '../constant'

export let createAddPersonAction = (name,age) =>{
    return {type:ADD_PERSON,data:{name,age}};
}