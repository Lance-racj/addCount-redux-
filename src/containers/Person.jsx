//引入CountUI组件
import PersonUI from "../components/Person";

//引入connect连接redux和CountUI组件
import {connect} from 'react-redux'

//引入actioncreater
import {createAddPersonAction} from '../redux/actions/person_action'

//mapStateToProps函数写在connect中，所以是由react-redux调用的，在调用的时候，该库会将redux中的数据传给mapStateToProps函数，mapStateToProps函数接收就好了
/* mapStateToProps函数返回给UI组件状态 */
let mapStateToProps=(reduxstate)=>{
    return {alldata:reduxstate};
}

/* mapDispatchToProps组件返回给UI组件操作状态的方法 */
let mapDispatchToProps=(dispatch)=>{
    return {
        add_person:(name,age)=>{dispatch(createAddPersonAction(name,age))}
    };
}

//创建并暴露一个容器组件
export default connect(mapStateToProps,mapDispatchToProps)(PersonUI);