import { fromJS } from 'immutable';
import * as actionType from './actionType';

const InitialState = fromJS({
   login: false
});

export default (state = InitialState , action) => {
    switch(action.type){
        case actionType.CHANGE_LOGIN:
            return state.set('login' , action.value);
        case actionType.CHANGE_LOGOUT:
            return state.set('login' , action.value);
        default :
            return state;
    }
}
