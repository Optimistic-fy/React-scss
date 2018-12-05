import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import imgUrl from './timg.jpg';

class Recommend extends Component{
    render(){
        const { list } = this.props;
        return(
            <div className="recommendWrapper">
            {
                list.map((item) => {
                    return (
                        <Link to='/hotRecommend' className="recommendItem" key={item.get('id')}>
                            <img src={item.get('imgUrl')} alt="图片" />
                        </Link>
                    )
                })
            }
            <div className="appWrapper">
                <div className="picWrapper">
                    <img src={imgUrl} alt="二维码图标" />
                    <div className="info">
                        <p>下载简书手机App&nbsp;&nbsp;</p>
                        <p className="everytime">随时随地发现和创作内容</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home' , 'recommendList'])
});

export default connect(
    mapState,
    null
)(Recommend);