import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {
  list: any;
  detail: any;

  constructor() { }

  ngOnInit() {
    this.list=this.detail;
    console.log(this.list);
  }

}
