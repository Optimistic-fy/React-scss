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
                <div className="regWrapper">
                    <div className="regOut">
                        <div className="regTittle">
                            <Link className="alabel regest" to="/login">登录</Link>
                            <b>.</b>
                            <Link className="alabel " to="#" >注册</Link>
                        </div>
                        <div className="regBox">
                            <div className="regItem">
                                <i className="iconfont">&#xe6da;</i>
                                <input className="tel inputText" placeholder='你的昵称' ref={(input) => this.content = input}/>
                            </div>
                            <div className="regItem">
                                <i className="iconfont">&#xe615;</i>
                                <input className="tel telphone inputText" placeholder='手机号' ref={(input) => this.content = input}/>
                            </div>
                            <div className="regItem">
                                <i className="iconfont">&#xe639;</i>
                                <input className="pass inputText" placeholder='设置密码' type='password' ref={(input) => this.pass = input} />
                            </div>
                        </div>
                        <div className="button" onClick={() => this.props.login(this.content , this.pass)}>注册</div>
                        <p>点击 “注册” 即表示您同意并愿意遵守简书<br /><Link className="superlink" to="#">用户协议</Link> 和 <Link className="superlink" to="#">隐私政策</Link></p>
                        <div className="regMore">
                            <p>————&nbsp;&nbsp;&nbsp;&nbsp;社交账号直接注册&nbsp;&nbsp;&nbsp;&nbsp;————</p>
                            <div className="regLogo">
                                <i className="iconfont weixin">&#xe620;</i>
                                <i className="iconfont qq">&#xe600;</i>
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