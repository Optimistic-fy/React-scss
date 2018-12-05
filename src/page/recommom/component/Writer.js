import React , { Component } from 'react';
import  { connect } from 'react-redux';
import { actionCreaters } from '../store';

class Writer extends Component{
    componentDidMount(){
        this.props.getWriterLists();
    }
    render(){
        const { writerList } = this.props;
        return(
            <div className="writerWrapper">
                <div className="writerTop">
                    <span>推荐作者</span>
                    <span className="change">
                        <i className="iconfont spin" ref={(icon) => {this.spinIcon = icon}}>&#xe61d;</i>
                        换一批
                    </span>
                </div>
                <div className="writerInfo">
                    {
                        writerList.map((item) => {
                            return (
                                <div className="writerList" key={item.get('id')}>
                                    <img alt="头像" src={item.get('imgUrl')} />
                                    <p className="name">{item.get('name')}</p>
                                    <p>{item.get('writetype')}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="writeButton">查看全部&nbsp;&nbsp;&gt;</div>
            </div>
        )
    }
}
const mapState = (state) => ({
    writerList: state.getIn(['recommend' , 'writerList'])
});
const mapDispatch = (dispatch) => ({
    getWriterLists(){
        dispatch(actionCreaters.getWriterList())
    },
    handleChangeWritePage(page , totalpage , spin){
        let originAngle = spin.style.transform.replace(/[^0-9]/ig , '');
        if(originAngle){
            originAngle = parseInt(originAngle , 10);  //按十进制转化成数字
        }else{
            originAngle = 0;
        }
        spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

        // if(page < totalpage){
        //     dispatch(actionCreaters.changeWriterPage(page + 1));
        // }else{
        //     dispatch(actionCreaters.changeWriterPage(1));
        // }
    }
})
export default connect(
    mapState,
    mapDispatch
)(Writer);