import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    writerList:[],
    articlePage: 1,
    writePage:1,
    writerTotalPage:0,
    showScroll: false,
    bannerList:[]
});

export default (state = defaultState , action) => {
    switch(action.type){
        case constants.GET_BANNER_LIST:
            return state.set('bannerList' , action.data)
        case constants.GET_TOPIC_LIST :
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            });
        case constants.CHANGE_WRITER_LIST:
            return state.merge({
                writerList: action.data,
                writerTotalPage: action.writerTotalPage
            });
        case constants.ADD_HOME_LIST :
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                articlePage: action.nextPage
            });
        case constants.SCROLL_TOP:
            return state.set('showScroll' , action.show)
        default :
            return state;
    }
}