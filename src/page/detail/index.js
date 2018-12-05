import React , { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreaters } from './store';
import './index.scss';
import  { withRouter } from 'react-router-dom';

class Detail extends Component{
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
        
        let body = document.body;
        body.style.background = '#fff';
    }
    render(){
        return(
            <div className="detailWrapper">
                <div className="header">{this.props.title}</div>
                <div className="content" dangerouslySetInnerHTML = {{__html: this.props.content}}></div>
            </div>
        )
    }
}
const mapState = (state) => ({
    title: state.getIn(['detail' , 'title']),
    content: state.getIn(['detail' , 'content'])
});
const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreaters.getDetail(id));
    }
});
export default connect(
    mapState,
    mapDispatch
)(withRouter(Detail));