import axios from "axios";
import * as constants from './constants';
import { fromJS } from 'immutable';

const getTopic = (articleList) => ({
    type: constants.GET_RECOMMEND_LIST,
    articleList: fromJS(articleList),
});

const getWriterData = (writerList) => ({
    type: constants.GET_WRITER_LIST,
    writerList: fromJS(writerList),
});

export const getListData = () => {
    return (dispatch) => {
        axios.get('/api/recommend.json')
        .then((res) => {
            const data = res.data;
            console.log(data.data.articleList);
            dispatch(getTopic(data.data.articleList));
        }).catch((err) => {
            console.log(err);
        })
    }
};

export const getWriterList = () => {
    return (dispatch) =>{
        axios.get('/api/recommend.json')
        .then((res) => {
            const data = res.data;
            console.log(data.data.writerList);
            dispatch(getWriterData(data.data.writerList));
        }).catch((err) => {
            console.log(err);
        })
    }
};
