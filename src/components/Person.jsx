import React, { Component } from 'react'

export default class Person extends Component {

    addPerson=()=>{
        let name = this.name.value;
        let age =this.age.value;
        this.props.add_person(name,age);
        //添加后清空input框
        this.name.value='';
        this.age.value='';
    }

    render() {
        return (
            <div>

                <h1>上方组件求和为:{this.props.alldata.firstCount}</h1>

                <input ref={c=>this.name=c} type="text" placeholder="input name"/>
                <input ref={c=>this.age=c} type="text" placeholder="input age"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.alldata.secondPerson.map((personObj)=>{
                            return <li key="">{personObj.name}--{personObj.age}</li>
                        })
                    }
                </ul>
                <h1>{this.props.alldata.secondPerson.length}</h1>
            </div>
        )
    }
}
