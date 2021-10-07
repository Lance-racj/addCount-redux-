import React, { Component } from 'react'
//Count是容器组件
import Count from './containers/Count'
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
                <Count store={store}/>
            </div>
        )
    }
}
