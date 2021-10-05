import React, { Component } from 'react'

export default class count extends Component {

    state = {count:0};

    //加法
    add=()=>{
        let {value} = this.refs.kvalue;
        let {count} = this.state;
        this.setState({count:count+value*1});
    }
    //减法
    noadd=()=>{
        let {value} = this.refs.kvalue;
        let {count} = this.state;
        this.setState({count:count-value});
    }
    //奇数加
    addIfOdd=()=>{
        let {value} = this.refs.kvalue;
        let {count} = this.state;
        if(count%2!==0){
            this.setState({count:count+value*1});
        }
    }
    //异步加
    addAnsyc=()=>{
        let {value} = this.refs.kvalue;
        let {count} = this.state;
        setTimeout(()=>{
            this.setState({count:count+value*1});
        },500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
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
