import { call, put } from 'redux-saga/effects'
import ArticleListAction from '../Redux/ArticleListReducer'
export function* getAllArticles(api, action) {
    try {
        const response = yield call(api.getArticles)
        console.log(response);
        if (response.ok) {
            yield put(ArticleListAction.getArticleListSuccess(response.data))
        } else {
            yield put(ArticleListAction.getArticleListFailure('Connection problems'))
        }
    } catch (error) {
        yield put(ArticleListAction.getArticleListFailure(error.message))
    }
}
