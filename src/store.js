import {createStore} from 'redux'
import listManager from './reducers/list-manager'

const Store = createStore(
    listManager
)

export default Store