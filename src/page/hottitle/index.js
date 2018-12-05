import React , { PureComponent } from 'react';
import './index.scss';
import bgImg from './hotTitle.png';
import { connect } from 'react-redux';
import { actionCreaters } from './store';

import { Menu } from 'antd';

class Hottitle extends PureComponent{
    state = {
        current: 'prefer',
    }
    componentDidMount(){
        this.props.ChangeHotlist()
    }
    render(){
        const { listitem } = this.props;
        return (
            <div>
                <div className="hotWrapp">
                    <div className="tittle">
                        <img className="bg-img" src={bgImg} />
                        <p><i className="iconfont">&#xe60b;</i>如何创建并玩转专题</p>
                    </div>
                    <div className="trigger" >
                        <Menu mode="horizontal" selectedKeys={[this.state.current]}>
                            <Menu.Item className="triggerItem" key="prefer">
                                <a href="#" rel="noopener noreferrer"><i className="iconfont">&#xe621;</i>推荐</a>
                            </Menu.Item>
                            <Menu.Item className="triggerItem">
                                <a href="#" rel="noopener noreferrer"><i className="iconfont">&#xe638;</i>热门</a>
                            </Menu.Item>
                            <Menu.Item className="triggerItem">
                                <a href="#" rel="noopener noreferrer"><i className="iconfont">&#xe612;</i>城市</a>
                            </Menu.Item>
                            <Menu.Item className="triggerItem">
                                <a href="#" rel="noopener noreferrer"><i className="iconfont">&#xe606;</i>校园</a>
                            </Menu.Item>
                        </Menu>
                    </div>
                    <div className="triggerListall">
                        {
                            listitem.map((item) => {
                                return (
                                    <div className="trigerList" key={item.get('id')}>
                                        <div className="listPic">
                                            <img alt="图片" src={item.get('imgUrl')} />
                                        </div>
                                        <div className="listItem">
                                            <p className="titles">{item.get('title')}</p>
                                            <p className="content">{item.get('content')}</p>
                                            <div className="care"><p>+&nbsp;关注</p></div>
                                            <hr/>
                                            <p className="article">{item.get('article')}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapState = (state) => ({
    listitem : state.getIn(['hottitle','list'])
});
const mapDispatch = (dispatch) => ({
    ChangeHotlist() {
        dispatch(actionCreaters.getHotlist())
    }
});

export default connect(
    mapState, 
    mapDispatch
)(Hottitle);


//加如一个页面时  
// 1.在app.js中添加路由
// 2.在最外界的router中引入子router
// <Route exact path='/文件夹名' component={文件夹import的命名}></Route>

// 3.该页面的reducer中dispatch中数据为fromJS(action.数组名);
// dispatch('list',fromJS(action.list))

// 4.actionCreater中的数组为list: result.list;
// const getList = (result) => ({
//     type: actionTypes.GET_HOT_LIST,
//     list: result.list
// })