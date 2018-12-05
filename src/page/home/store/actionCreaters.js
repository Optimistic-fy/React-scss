import axios from "axios";
import * as constants from './constants';
import { fromJS } from 'immutable';

const getTopicItem = (result) => ({
    type: constants.GET_TOPIC_LIST,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    // writerList: result.writerList
});

const changeWriterList = (data) => ({
    type: constants.CHANGE_WRITER_LIST,
    data: fromJS(data),
    writerTotalPage: Math.ceil(data.length / 5)  
});

const addHomeList = (list , nextPage) =>({
    type: constants.ADD_HOME_LIST,
    list: fromJS(list),
    nextPage
});

const getbannerImg = (data) => ({
    type: constants.GET_BANNER_LIST,
    data: fromJS(data)
});

export const changeWriterPage = (writePage) => ({
    type: constants.CHANGE_WRITER_PAGE,
    writePage
});

export const toogleTopShow = (show) => ({
    type: constants.SCROLL_TOP,
    show
});

export const getTopicListItem = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
        .then((res) => {
            const data = res.data;
            console.log(data.data);
            dispatch(getTopicItem(data.data));
        }).catch((err) => {
            console.log(err);
        })
    }
};

export const getWriterList = () => {
    return (dispatch) =>{
        axios.get('/api/home.json')
        .then((res) => {
            const data = res.data;
            console.log(data.data);
            dispatch(changeWriterList(data.data.writerList));
        }).catch((err) => {
            console.log(err);
        })
    }
};

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page)
        .then((res) => {
            const data = res.data;
            dispatch(addHomeList(data.data , page + 1));
        }).catch((err) => {
            console.log(err);
        })
    }
};

export const getBanner = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
        .then((res) => {
            const data = res.data;
            console.log(data.data.bannerList);
            dispatch(getbannerImg(data.data.bannerList));
        })
    }
}