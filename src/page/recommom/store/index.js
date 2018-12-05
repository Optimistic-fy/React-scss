//用于引入同级目录下的reducer  然后用外部总的reducer将其集合
import reducer from './reducer';
import * as actionCreaters from './actionCreaters';
import * as constants from './constants';

export { reducer, actionCreaters, constants };