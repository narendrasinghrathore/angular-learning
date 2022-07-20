import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  practiceWorkInParent ="";
  msgFromChild = "";

  constructor() { }

  ngOnInit(): void {
  }

  recieveMessage(msg: any){
    this.msgFromChild = msg;
  }
}
