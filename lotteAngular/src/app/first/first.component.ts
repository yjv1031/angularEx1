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

  carList = [{
        "atchFileMbId": "",
        "modDt": "",
        "loginId": "",
        "incml": "",
        "regNm": "",
        "arrBranchCd": null,
        "schEmail2": "",
        "equnr": "",
        "pageSize": 0,
        "pageUnit": 0,
        "schEmail1": "",
        "modId": "",
        "fuelcdTx": "",
        "jsFunction": null,
        "carNo": "",
        "joindt": "",
        "viewCnt": "",
        "carcdTx": "",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  carNo(car) {
    alert(car.carNo);
  }

  callCarList() {
    axios({
      method: 'post',
      url: 'http://t.lotterentacar.net/hp/kor/funcCommon/usedCarTheme1Info.json',
      data: {}
    }).then(
      (res) => {
        console.log(JSON.stringify(res, null, 2));
        this.carList = res.data.resultList;
      }
    );
  }
}
