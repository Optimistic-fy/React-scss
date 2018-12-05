import React , {Component} from 'react';
import './index.scss';
import '../../statics/icon-font/iconfont.scss';
import logo from '../../statics/logo.png';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreaters } from './store';
import { Link } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            focused: false
        };
    }
    getListArea(show){
        const { list , page ,totalpage , mouseIn, handleMouseIn , handleMouseOut , handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for(let i= (page -1) * 10; i < page * 10; i++){
                pageList.push(
                    <a className="seachInfoItem" href="javascript:;" key={newList[i]}>{newList[i]}</a>
                )
            }
        }
        if(show  || mouseIn){
            return (
                <div className="searchInfo" 
                     onMouseEnter={handleMouseIn}
                     onMouseLeave={handleMouseOut}>
                    <div className="searchInfoTitle">
                        热门搜索
                        <div className="searchInfoSwitch" 
                             onClick={() => handleChangePage(page , totalpage , this.spinIcon)}>
                                <i className="iconfont spin"
                                    ref={(icon) => {this.spinIcon = icon}} >&#xe61d;</i>
                                换一批
                             </div>
                    </div>
                    <div className="seachInfoList">
                        {pageList}
                    </div>
                </div>
            )
        }else{
            return null ;
        }
    }
    render(){
        const { focused ,handleInputFocused , handleInputBlur , list , login , logout } = this.props;
        return (
            <div className="headerWraper">
                <a className="logoA" href="/"><img className="loGo" src={logo} alt="LOGO" /></a>
                <div className="nav">
                    <Link to="/" className="items itemLeft active">首页</Link>
                    <div className="items itemLeft">下载App</div>
                    {
                        login ? <div className="items itemRight" onClick={logout}>退出</div> :
                            <Link to="/login" className="items itemRight" onClick={logout}>登录</Link>
                    }
                    <div className="items itemRight">
                        <i className="iconfont">&#xe636;</i>
                    </div>
                    <div className="searchWrapper">
                        <CSSTransition 
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                             <input 
                                className={focused ? 'focused' : ''} 
                                placeholder="搜索" 
                                onFocus = {() => handleInputFocused(list)}
                                onBlur = {handleInputBlur} />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe617;</i>
                        { this.getListArea(focused) }
                    </div>
                </div>
                <div className="addition">
                    <Link to="/write">
                        <div className="buttn write">
                            <i className="iconfont">&#xe618;</i>&nbsp;写文章
                        </div>
                    </Link>
                    <Link to="/register">
                        <div className="buttn register">注册</div>
                    </Link>
                </div>
            </div>
        )
    }
}
const mapStateToprops = (state) => ({
    // focused: state.header.focused  //未引用immutable前
    focused: state.getIn(['header' , 'focused']),
    list: state.getIn(['header' , 'list']),
    page: state.getIn(['header' , 'page']),
    totalpage: state.getIn(['header' , 'totalpage']),
    mouseIn: state.getIn(['header' , 'mouseIn']),
    login:state.getIn(['login' , 'login'])
})

const mapDispatchToprops = (dispatch) => ({
    handleInputFocused(list){
        if(list.size === 0){ //当没有值时才去发送ajax请求
            dispatch(actionCreaters.getList());
        }
        dispatch(actionCreaters.searchFocused());
    },
    handleInputBlur(){
        dispatch(actionCreaters.searchBlur());
    },
    handleMouseIn(){
        dispatch(actionCreaters.mouseEnter());
    },
    handleMouseOut(){
        dispatch(actionCreaters.mouseLeave());
    },
    handleChangePage(page , totalpage , spin){
        let originAngle = spin.style.transform.replace(/[^0-9]/ig , '');
        if(originAngle){
            originAngle = parseInt(originAngle , 10);  //按十进制转化成数字
        }else{
            originAngle = 0;
        }
        spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

        if(page < totalpage){
            dispatch(actionCreaters.changePage(page + 1));
        }else{
            dispatch(actionCreaters.changePage(1));
        }
    },
    logout(){
        dispatch(actionCreaters.logout())
    }
})

export default connect(
    mapStateToprops,
    mapDispatchToprops
)(Header);