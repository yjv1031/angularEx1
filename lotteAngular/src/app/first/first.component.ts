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

  carList = [
    {
      title: '소나타111'
      ,content: 'asdff'      
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  carNo(car) {
    alert(car.title);
    car.title += 'zzzz';
  }

  callCarList() {
    this.reservationVO.carNm = '111';
    axios({
      method: 'get',
      url: '/lot/notice/list',
      data: {}
    }).then(
      (res) => {
        console.log(JSON.stringify(res, null, 2));
        this.carList = res.data.resultData;
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
        this.carList = res.data.resultData;
      }
    );
  }
}
