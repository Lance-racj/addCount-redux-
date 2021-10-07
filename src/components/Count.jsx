import React, { Component } from 'react'

export default class Count extends Component {
    //加法
    add=()=>{
        let {value} = this.refs.kvalue;
        this.props.toadd(value*1);
    }
    //减法
    noadd=()=>{
        let {value} = this.refs.kvalue;
        this.props.notoadd(value);
    }
    //奇数加
    addIfOdd=()=>{
        let {value} = this.refs.kvalue;
        if(this.props.count%2 !== 0){
            this.props.toadd(value*1);
        }
    }
    //异步加
    addAnsyc=()=>{
        let {value} = this.refs.kvalue;
        setTimeout(()=>{
            this.props.toadd(value*1);
        },500)
    }

    render(){
        return (
            <div>
                <h1>当前求和为:{this.props.count}</h1>
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
