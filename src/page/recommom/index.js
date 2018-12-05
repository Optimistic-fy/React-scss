import React , { Component } from 'react';
import { connect } from 'react-redux';
// import { actionCreaters } from './store';
import List from './component/List';
import Writer from './component/Writer';
import './index.scss';
import  { withRouter } from 'react-router-dom';
import imgImg from './seven-hot.png';

class HotRecommend extends Component{
    render(){
        return(
            <div className="recommendWrapper">
                <div className="recommendLeft">
                    <img className="hotImg" src={imgImg} alt="7日热门" />
                    <List />
                </div>
                <div className="recommendRight">
                    <Writer />
                </div>
            </div>
        )
    }
}
const mapState = (state) => ({
});
const mapDispatch = (dispatch) => ({
});
export default connect(
    mapState,
    mapDispatch
)(withRouter(HotRecommend));