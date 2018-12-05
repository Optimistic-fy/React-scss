import * as constants from './constants';
import { fromJS } from 'immutable'; //使state不可改变

// const defaultState = {   //未使用immutable
//     focused: false
// };
const defaultState = fromJS({
    focused: false,
    list:[],
    page:1,
    totalpage:0,
    mouseIn:false
});

export default (state = defaultState , action) => {
    switch(action.type){
        case constants.SERACH_FOCUSED :
            // return {focused: true}, //未使用immutable
            return state.set('focused', true);
        case constants.SEARCH_BLUR :
            return state.set('focused', false);
        case constants.CHANGE_LIST :
            return state.merge({
                list: action.data,
                totalpage: action.totalpage
            });
        case constants.MOUSE_ENTER :
            return state.set('mouseIn' , true);
        case constants.MOUSE_LEAVE :
            return state.set('mouseIn' , false);
        case constants.CHANGE_PAGE :
            return state.set('page' , action.page);
        default :
            return state;
    }
}