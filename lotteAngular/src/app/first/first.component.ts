import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  reservationVO = {
    carCd: 'sm01',
    upCarCd: 'sm011',
    carNm: '소나타'
  };

  noticeList = [
  ];

  emptyNotice = {
    title:'',
    content:'',
    writer:'',
  }

  constructor() { }

  ngOnInit(): void {
  }

  callNoticeList() {
    axios({
      method: 'get',
      url: '/lot/notice/list',
      data: {}
    }).then(
      (res) => {
        console.log(JSON.stringify(res, null, 2));
        const data = res.data;
        this.noticeList = data.resultData;
      }
    );
  }

  updateNotice(car) {
    console.log(JSON.stringify(car, null, 2));
    axios({
      method: 'put',
      url: '/lot/notice',
      data: car
    }).then(
      (res) => {
        console.log(JSON.stringify(res, null, 2));

        const data = res.data;
        if(data.resultCode > 0) {
          alert('정상적으로 업데이트 되었습니다');
        } else {
          alert('업데이트를 실패하였습니다');
        }

        this.noticeList = data.resultData;
      }
    );
  }

  insertNotice() {
    console.log(JSON.stringify(this.emptyNotice, null, 2));
    axios({
      method: 'post',
      url: '/lot/notice',
      data: this.emptyNotice
    }).then(
      (res) => {
        console.log(JSON.stringify(res, null, 2));

        const data = res.data;
        if(data.resultCode > 0) {
          alert('정상적으로 작성 되었습니다');
        } else {
          alert('작성을 실패하였습니다');
        }

        this.noticeList = data.resultData;
      }
    );
  }

  deleteNotice(car) {
    console.log(JSON.stringify(car, null, 2));
    axios({
      method: 'delete',
      url: '/lot/notice',
      data: car
    }).then(
      (res) => {
        console.log(JSON.stringify(res, null, 2));

        const data = res.data;
        if(data.resultCode > 0) {
          alert('정상적으로 삭제 되었습니다');
        } else {
          alert('삭제를 실패하였습니다');
        }

        this.noticeList = data.resultData;
      }
    );
  }
}
