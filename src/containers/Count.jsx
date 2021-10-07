//引入CountUI组件
import CountUI from "../components/Count";

//引入connect连接redux和CountUI组件
import {connect} from 'react-redux'

//引入actioncreater
import {createAddAction,createnoAddAction} from '../redux/count_actioncreater'

//mapStateToProps函数写在connect中，所以是由react-redux调用的，在调用的时候，该库会将redux中的数据传给mapStateToProps函数，mapStateToProps函数接收就好了
/* mapStateToProps函数返回给UI组件状态 */
let mapStateToProps=(reduxstate)=>{
    return {count:reduxstate};
}


/* mapDispatchToProps组件返回给UI组件操作状态的方法 */
let mapDispatchToProps=(dispatch)=>{
    return {
        toadd:(value)=>{dispatch(createAddAction(value))},
        notoadd:(value)=>{dispatch(createnoAddAction(value))}
    };
}

//创建并暴露一个容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI);