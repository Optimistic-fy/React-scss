import React , { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import { actionCreaters } from './store';
import { Carousel } from 'antd';

class Home extends Component{
    componentDidMount(){
        this.props.getHomeData();
        this.props.getWriterLists();
        this.props.getBanner();
        this.bindEvents();
        
        let body = document.body;
        body.style.background = '#fff';
    }
    handleScrollTop(){
        window.scrollTo(0,0);
    }
    bindEvents(){
        window.addEventListener('scroll' , this.props.changeScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll' , this.props.changeScroll)
    }
    render(){
        const { bannerList } = this.props;
        return(
            <div className="homeWrapper">
                <div className="homeLeft">
                    <div>
                        <Carousel autoplay>
                        {
                            bannerList.map((item) => {
                                return (
                                    <div key={item.get('id')}>
                                        <img 
                                            className="banner-img" 
                                            alt="Img" 
                                            src={item.get('imgUrl')} />
                                    </div>
                                )
                            })
                        }
                        </Carousel>
                    </div>
                    <Topic />
                    <List />
                </div>
                <div className="homeRight">
                    <Recommend />
                    <Writer />
                </div>
                { this.props.showScroll ? <div className="backTop" onClick={this.handleScrollTop}>
                    <i className="iconfont">&#xe641;</i>
                </div> : null}
            </div>
        )
    }
}
const mapState = (state) => ({
    showScroll: state.getIn(['home' , 'showScroll']),
    bannerList: state.getIn(['home' , 'bannerList']),
});
const mapDispatch = (dispatch) => ({
    getHomeData(){
        dispatch(actionCreaters.getTopicListItem());
    },
    getWriterLists(){
        dispatch(actionCreaters.getWriterList());
    },
    getBanner(){
        dispatch(actionCreaters.getBanner());
    },
    changeScroll(){
        if(document.documentElement.scrollTop > 350){
            dispatch(actionCreaters.toogleTopShow(true))
        }else{
            dispatch(actionCreaters.toogleTopShow(false))
        }
    }
});
export default connect(
    mapState,
    mapDispatch
)(Home);