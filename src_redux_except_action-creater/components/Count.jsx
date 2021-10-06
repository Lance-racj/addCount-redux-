import React, { Component } from 'react'
import store from '../redux/store'

export default class count extends Component {

    //加法
    add=()=>{
        let {value} = this.refs.kvalue;
        store.dispatch({type:'add',data:value*1});
    }
    //减法
    noadd=()=>{
        let {value} = this.refs.kvalue;
        store.dispatch({type:'noadd',data:value*1});
    }
    //奇数加
    addIfOdd=()=>{
        let {value} = this.refs.kvalue;
        let count = store.getState();
        if(count%2!==0){
            store.dispatch({type:'add',data:value*1});
        }
    }
    //异步加
    addAnsyc=()=>{
        let {value} = this.refs.kvalue;
        setTimeout(()=>{
            store.dispatch({type:'add',data:value*1});
        },500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                <select ref="kvalue">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.add}>+</button>&nbsp;
                <button onClick={this.noadd}>-</button>&nbsp;
                <button onClick={this.addIfOdd}>求和为奇数再加</button>&nbsp;
                <button onClick={this.addAnsyc}>异步加</button>&nbsp;
            </div>
        )
    }
}
