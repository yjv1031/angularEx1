import { observable, action, computed, toJS, makeAutoObservable } from 'mobx';
import axios from 'axios';

class noticeStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  @observable
  _ddd = '%%';

  @computed
  get ddd() {
    return toJS(this._ddd);
  }

  @observable
  _noticeList = [];

  @computed
  get noticeList() {
    return toJS(this._noticeList);
  }

  @action
  setNoticeValue(column, idx, val) {
    this._noticeList[idx][column] = val;
  }

  @observable
  _emptyNotice = {
    writer: '222',
    title: '',
    content: '',
  }

  @computed
  get emptyNotice() {
    return toJS(this._emptyNotice);
  }

  @action
  setEmptyValue(column, val) {
    this._emptyNotice[column] = val;
  }

  //공지사항 조회
  @action
  callNoticeList() {
    axios({
      url: 'http://127.0.0.1:8090/lot/notice/list',
      method: 'get',
      data: {
      }
    }).then(
        (res) => {
          this._noticeList = [...res.data.resultData];
          console.log('!!!');
          console.log(JSON.stringify(this.noticeList, null, 2));
        }
    );
  }

  //공지사항 입력
  @action
  insertNoticeAjax() {
    axios({
        url: 'http://127.0.0.1:8090/lot/notice',
        method: 'post',
        data: this.emptyNotice
    }).then(
      (res) => {
            console.log(JSON.stringify(res, null, 2));
            if(res.data.resultCode > 0) {
                alert('정상적으로 입력되었습니다');
            } else {
                alert('서버 문제로 실패하였습니다.');
            }
            this._noticeList = [...res.data.resultData];
        }
    );
  }

  //공지사항 수정
  @action
  updateNoticeAjax(index) {
    axios({
        url: 'http://127.0.0.1:8090/lot/notice',
        method: 'put',
        data: this._noticeList[index]
    }).then(
      (res) => {
            console.log(JSON.stringify(res, null, 2));
            if(res.data.resultCode > 0) {
                alert('정상적으로 수정되었습니다');
            } else {
                alert('서버 문제로 실패하였습니다.');
            }
            this._noticeList = [...res.data.resultData];
        }
    );        
  }

  //공지사항 삭제
  @action
  deleteNoticeAjax(index) {
    axios({
        url: 'http://127.0.0.1:8090/lot/notice',
        method: 'delete',
        data: this._noticeList[index]
    }).then(
      (res) => {
            console.log(JSON.stringify(res, null, 2));
            if(res.data.resultCode > 0) {
                alert('정상적으로 삭제되었습니다');
            } else {
                alert('서버 문제로 실패하였습니다.');
            }
            this._noticeList = [...res.data.resultData];
        }
    );
  }
}

export default noticeStore;