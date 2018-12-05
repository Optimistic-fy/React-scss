import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
   title:'',
   content:''
});

export default (state = defaultState , action) => {
    switch(action.type){
        case constants.GET_DETAIL_CONTENT :
            return state.merge({
                title: action.title,
                content: action.content
            });
        default :
            return state;
    }
}