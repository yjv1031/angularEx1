import './App.css';
import React from 'react';
import { inject } from "mobx-react";
import NoticeView from './view/NoticeView';
import { Route, BrowserRouter } from 'react-router-dom';

@inject('noticeStore')
class App extends React.Component {

  //생명주기

  //렌더 => 화면을 그릴떄

  //컴포넌트 디드마운트 => 화면을 다그리고 나서

  render() {
    return (
      <BrowserRouter>
        <div>
            <Route path="/notice" component={NoticeView} />
        </div>
      </BrowserRouter>
    )
  }

}

export default App;
