import {takeLatest} from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */
import {ArticleListType} from '../Redux/ArticleListReducer'

/* ------------- Sagas ------------- */
import {getAllArticles} from './ArticleListSaga'
/* ------------- API ------------- */
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
    yield [
        takeLatest(ArticleListType.GET_ARTICLE_LIST_REQUEST, getAllArticles, api), ,
        // takeLatest(userType.POST_DISPATCH, postDispatch, api),
    ]
}
