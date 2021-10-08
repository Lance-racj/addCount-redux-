//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore,combineReducers} from 'redux'
//引入为Count组件服务的reducer
import countReducer from './reducers/count_reducers'
//引入为Person组件服务的reducer
import personReducer from './reducers/person_reducer'
//引入redux开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'



//合并reducers,combineReducers里面传入的对象值就是store里面保存的值
const allReducers = combineReducers({
    firstCount:countReducer,
    secondPerson:personReducer
})
//将创建的store默认暴露出去，整个文件只有一个store
export default createStore(allReducers,composeWithDevTools());