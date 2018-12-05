import { fromJS } from 'immutable';
import * as actionTypes from './actionType';

const InitialState = fromJS({
    list:[]
});

export default (state = InitialState , action) => {
    switch(action.type){
        case actionTypes.GET_HOT_LIST:
            return state.set('list' , fromJS(action.list));
        default :
            return state;
    }
};
