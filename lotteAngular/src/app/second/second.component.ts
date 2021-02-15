import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.callCarLifePostList();
  }

  isContsDetail = false;

  postList = [
  ];

  callCarLifePostList() {
    axios({
      method: 'get',
      url: '/lot/carLifePost/list',
      data: {}
    }).then(
      (res) => {
        console.log(JSON.stringify(res, null, 2));
        const data = res.data;
        this.postList = data.resultData;
        
      }
    );
  }

  postDetail = {
    postSeq:'',
    postTitl1:'',
    postTitl2:'',
    postStDt:'',
    postEndDt:'',
  }

  getPostDetail(post) {
    console.log(post);
    axios({
      method: 'get',
      url: '/lot/carLifePost',
      data: {"postSeq" : post.postSeq}
    }).then(
      (res) => {
        console.log(JSON.stringify(res, null, 2));
        this.postDetail = res.data.resultData;
        this.isContsDetail = true;
      }
    );
  }

}
