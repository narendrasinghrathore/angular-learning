import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  componentName='child';
  @Input()
  practiceWork = '';

  @Output()
  sendMessageEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {}

    sendMessageToParent(e: any): void
    {
      this.sendMessageEmitter.emit(e.target.value);
    }


}
