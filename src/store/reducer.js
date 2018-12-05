import { combineReducers } from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';
import {reducer as homeReducer} from '../page/home/store';
import { reducer as  detailReducer} from '../page/detail/store';
import { reducer as loginReducer } from '../page/login/store';
import { reducer as HotReducer } from '../page/hottitle/store';
import { reducer as recommendReducer } from '../page/recommom/store';

const reducer = combineReducers({
    header: headerReducer,     //添加了一层，所以mapstatetoprops中的值要在header中去取
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer,
    hottitle: HotReducer,
    recommend: recommendReducer
});

export default reducer;