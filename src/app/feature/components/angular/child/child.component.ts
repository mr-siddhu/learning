import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent {
  
  msg:String = 'message from child component .. ';

  print(){
      alert("hello from child using derective")
  }

}
