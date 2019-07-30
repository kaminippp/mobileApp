import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
    getArticleListRequest: null,
    getArticleListSuccess: ['ArticleList'],
    getArticleListFailure: ['error']
});

export const ArticleListType = Types;
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    ArticleList: [],
    status: '',
    fetching: true,
    errorMessage: '',
    error: false
});

/* ------------- Reducers ------------- */
export const getArticleListRequest = (state, action) => {
    return state.merge({
        fetching: true,
        error: false,
        errorMessage: ''
    })
};

export const getArticleListSuccess = (state, action) => {
    return state.merge({
        fetching: false,
        error: false,
        errorMessage: '',
        ArticleList: action.ArticleList.results
    })
};

export const getArticleListFailure = (state, action) => {
    return state.merge({
        fetching: false,
        error: true,
        errorMessage: action.error
    })
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_ARTICLE_LIST_REQUEST]: getArticleListRequest,
    [Types.GET_ARTICLE_LIST_SUCCESS]: getArticleListSuccess,
    [Types.GET_ARTICLE_LIST_FAILURE]: getArticleListFailure
});
