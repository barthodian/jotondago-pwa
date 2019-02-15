import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})
export class MessageNewComponent implements OnInit {
  firstFormGroup:FormGroup;
  secondFormGroup:FormGroup;
  priorities:string[] = ['High', 'Medium', 'Low'];
  departments:object[] = [
    {
      id: 1,
      name: 'Complaints'
    },
    {
      id: 2,
      name: 'Loyalty'
    },  
    {
      id: 3,
      name: 'Promotions'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
