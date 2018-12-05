import axios from 'axios';
import * as actionTypes from './actionType';

const getList = (result) => ({
    type: actionTypes.GET_HOT_LIST,
    list: result.list
});
export const getHotlist = () => {
    return (dispatch) => {
        axios.get('/api/hotlist.json')
        .then((res) => {
            const result = res.data.data;
            console.log(result);
            dispatch(getList(result));
        }).catch((err) => {
            console.log(err);
        })
    }
};