import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    articleList:[],
    writerList:[],
})
export default (state = defaultState , action) => {
    switch(action.type){
        case constants.GET_RECOMMEND_LIST:
            return state.set('articleList' , action.articleList)
        case constants.GET_WRITER_LIST :
            return state.merge({
                writerList: fromJS(action.writerList),
            });
        default :
            return state;
    }
}