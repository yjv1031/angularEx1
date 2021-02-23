import './App.css';
import React from 'react';
import { inject, observer } from "mobx-react";

@inject('noticeStore')
@observer
class App2 extends React.Component {

  consoleApp() {
    console.log('프랍스');
    console.log(this.props);
  }
  
  render() {
    const {  insertNoticeAjax, emptyNotice, setEmptyValue, callNoticeList, noticeList, setNoticeValue, updateNoticeAjax, deleteNoticeAjax } = this.props.noticeStore;

    return (
      <div>
        <table>
            <tbody>
                <tr>
                    <td>새로운 글</td>
                    <td><input value={emptyNotice.writer} onChange={(e) => {setEmptyValue('writer', e.target.value);}}/></td>
                    <td><input value={emptyNotice.title} onChange={(e) => {setEmptyValue('title', e.target.value);}}/></td>
                    <td><input value={emptyNotice.content} onChange={(e) => {setEmptyValue('content', e.target.value);}}/></td>
                    <td><button onClick={() => {insertNoticeAjax();}}>등록하기</button></td>
                    <td><button onClick={() => {callNoticeList();}}>조회하기</button></td>
                </tr>
                {noticeList.map(
                  (notice, idx) => {
                    return (<tr>
                              <td>{notice.seq}번글</td>
                              <td><input value={notice.writer} onChange={ (e) => {setNoticeValue('writer', idx, e.target.value)} }/></td>
                              <td><input value={notice.title} onChange={ (e) => {setNoticeValue('title', idx, e.target.value)} }/></td>
                              <td><input value={notice.content} onChange={ (e) => {setNoticeValue('content', idx, e.target.value)} }/></td>
                              <td><button onClick={ () => {updateNoticeAjax(idx)} }>수정</button></td>
                              <td><button onClick={ () => {deleteNoticeAjax(idx)} }>삭제</button></td>
                          </tr>) 
                  }
                )}
            </tbody>
        </table>
      </div>
    )
  }
}

export default App2;
