import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
    /* ------------- Assemble The Reducers ------------- */
    const rootReducer = combineReducers({
        ArticleList: require('./ArticleListReducer').reducer,
    })

    return configureStore(rootReducer, rootSaga)
}
