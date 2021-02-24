import React from 'react';
import { inject, observer } from "mobx-react";

@inject('noticeStore')
@observer
class homeView extends React.Component {
  
  render() {
    return (
      <div>
        <h1>메뉴리스트</h1>
      </div>
    )
  }
}

export default homeView;
