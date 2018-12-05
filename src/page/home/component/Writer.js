import React , { Component } from 'react';
import  { connect } from 'react-redux';
import { actionCreaters } from '../store';

class Writer extends Component{
    render(){
        const { writerList , writePage , writerTotalPage ,handleChangeWritePage } = this.props;
        const newWriterList = writerList.toJS();
        const writerPageList = [];
        for(let i = (writePage - 1) * 5 ; i< writePage * 5 ; i++){
            writerPageList.push(
                // <div className="writerList" key={newWriterList[i].id}>
                //     <img alt="头像" src={newWriterList[i].imgUrl} />
                //     <p className="name">{newWriterList[i].name}</p>
                //     <p>{newWriterList[i].writetype}</p>
                // </div>
            )
        }
        // console.log('123');
        // console.log(writerList);
        // console.log(newWriterList);
        // console.log(newWriterList[0]);
        return(
            <div className="writerWrapper">
                <div className="writerTop">
                    <span>推荐作者</span>
                    <span className="change" onClick={() => handleChangeWritePage(writePage , writerTotalPage , this.spinIcon )}>
                        <i className="iconfont spin" ref={(icon) => {this.spinIcon = icon}}>&#xe61d;</i>
                        换一批
                    </span>
                </div>
                <div className="writerInfo">
                    {/* { writerPageList } */}
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
    writerList: state.getIn(['home' , 'writerList']),
    writePage: state.getIn(['home' ,'writePage']),
    writerTotalPage: state.getIn(['home','writerTotalPage'])
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

        if(page < totalpage){
            dispatch(actionCreaters.changeWriterPage(page + 1));
        }else{
            dispatch(actionCreaters.changeWriterPage(1));
        }
    }
})
export default connect(
    mapState,
    mapDispatch
)(Writer);