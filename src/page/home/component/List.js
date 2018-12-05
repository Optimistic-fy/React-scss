import React , { Component } from 'react';
import '../index.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreaters } from '../store';

class List extends Component{
    render(){
        const { articleList , getMoreList , page } = this.props;
        return(
            <div>
                {
                    articleList.map((item , index) => {
                        return (
                            <div className="lisiItem" key={item.get('id')}>
                                <img className="pic" src={item.get('imgUrl')} alt="pic" />
                                <div className="listInfo">
                                    <Link key={index} to={ '/detail/' + item.get('id')}>
                                        <div className="title">{item.get('title')}</div>
                                    </Link>
                                    <div className="Info">{item.get('Info')}</div>
                                </div>
                                <div className="listName">
                                    <span>{item.get('name')}</span>
                                    <i className="iconfont">&#xe667;</i>
                                    <i className="iconfont">&#xe662;</i>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="loadMore" onClick={() => getMoreList(page)}>阅读更多</div>
            </div>
        )
    }
}
const mapState = (state) => ({
    articleList: state.getIn(['home' , 'articleList']),
    page: state.getIn(['home' , 'articlePage']),
});
const mapDispatch = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreaters.getMoreList(page));
    }
})
export default connect(
    mapState,
    mapDispatch
)(List);