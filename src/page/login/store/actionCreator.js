import axios from 'axios';
import * as actionType from './actionType';

const changeLogin = () => ({
    type: actionType.CHANGE_LOGIN,
    value: true
});

export const login = (account , pass) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + pass)
        .then((res) => {
            const result = res.data.data;
            if(result){
                dispatch(changeLogin());
            }else{
                alert('登陆失败');
            }
        })
    }
}
