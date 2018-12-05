import React , { Component } from 'react';
import '../index.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Topic extends Component{
    render(){
        const { list } = this.props;
        return(
            <div className="toppicWrapper">
                { 
                    list.map((item) => (
                        <div className="topicItem" key={item.get('id')}>
                            <img 
                                className="topic-pic" 
                                alt={item.get('title')} 
                                src={item.get('imgUrl')}
                            />
                            {item.get('title')}
                        </div>
                    ))
                }
                <Link className="more" to='/hottitle'>更多热门消息&nbsp;&nbsp;&gt;</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home' , 'topicList'])
});

export default connect(
    mapStateToProps,
    null
)(Topic);