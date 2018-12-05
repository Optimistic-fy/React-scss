import axios from "axios";
import * as constants from './constants';

const getDetailContent = (title , content) => ({
    type: constants.GET_DETAIL_CONTENT,
    title,
    content
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id)
        .then((res) => {
            const result = res.data.data;
            dispatch(getDetailContent(result.title , result.content));
        }).catch((err) => {
            console.log(err);
        })
    }
}