import React, { Component } from 'react'
import Count from './components/Count'
import store from './redux/store'

export default class App extends Component {

    //只要检测到redux中有状态改变，就重新挂载App组件，由于页面使用了diff算法，因此不用担心效率问题。
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({});
        })
    }

    render() {
        return (
            <div>
                <Count/>
            </div>
        )
    }
}
