import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { actionCreaters } from './store';
import { Redirect , Link } from 'react-router-dom';

class Login extends PureComponent{
    componentDidMount(){
        let body = document.body;
        body.style.background = '#f1f1f1';
    }
    render(){
        const { loginStatus } = this.props;
        if( !loginStatus ){
            return (
                <div className="loginWrapper">
                    <div className=" loginOut">
                        <div className="loginTittle">
                            <Link className="alabel" to="#">登录</Link>
                            <b>.</b>
                            <Link className="alabel regest" to="/register">注册</Link>
                        </div>
                        <div className="loginBox">
                            <div className="loginItem">
                                <i className="iconfont">&#xe6da;</i>
                                <input className="tel input-text" placeholder='手机号或邮箱' ref={(input) => this.content = input}/>
                            </div>
                            <div className="loginItem">
                                <i className="iconfont">&#xe639;</i>
                                <input className="pass input-text" placeholder='密码' type='password' ref={(input) => this.pass = input} />
                            </div>
                        </div>
                        <div className="loginWord">
                            <input className="check input" type="checkbox" />
                            <span>记住我</span>
                            <span className="problem">登陆遇见问题?</span>
                        </div>
                        <div className="button" onClick={() => this.props.login(this.content , this.pass)}>登陆</div>
                        <div className="loginMore">
                            <p>————&nbsp;&nbsp;&nbsp;&nbsp;社交账号登陆&nbsp;&nbsp;&nbsp;&nbsp;————</p>
                            <div className="loginLogo">
                                <i className="iconfont weibo">&#xe63c;</i>
                                <i className="iconfont weixin">&#xe620;</i>
                                <i className="iconfont qq">&#xe600;</i>
                                <span className="word">其他</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return <Redirect to='/' />
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
   login(accountElem , passElem){
       dispatch(actionCreaters.login(accountElem.value , passElem.value))
   }
})

export default connect(
    mapState,
    mapDispatch
)(Login);