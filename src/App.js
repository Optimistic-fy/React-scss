import React, { Component } from 'react';
import  { Provider } from 'react-redux';
import { BrowserRouter , Route } from 'react-router-dom';

import Header from './common/header';
import store from './store/index';
import Home from './page/home/index';
import Detail from './page/detail/loading';
import Login from './page/login';
import Write from './page/write';
import Register from './page/register';
import HotTitle from './page/hottitle/loading';
import HotRecommend from './page/recommom/loading';
import './reset.scss'

class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/login' component={Login}></Route>
                        <Route exact path='/register' component={Register}></Route>
                        <Route exact path='/Write' component={Write}></Route>
                        <Route exact path='/hottitle' component={HotTitle}></Route>
                        <Route exact path='/detail/:id' component={Detail}></Route>
                        <Route exact path='/hotRecommend' component={HotRecommend}></Route>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
