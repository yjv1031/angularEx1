import './App.css';
import React from 'react';
import { inject } from "mobx-react";
import NoticeView from './view/NoticeView';
import HomeView from './view/HomeView';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

@inject('noticeStore')
class App extends React.Component {

  //생명주기

  //렌더 => 화면을 그릴떄

  //컴포넌트 디드마운트 => 화면을 다그리고 나서

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
              <Route exact path="/" component={HomeView} />
              <Route exact path="/notice" component={NoticeView} />
          </div>
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App;
