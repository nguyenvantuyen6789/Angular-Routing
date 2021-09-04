import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html'
})
export class NewCmpComponent implements OnInit {

  address = "Hải Phòng!";
  time: any;
  name: any;

  constructor(private myserviceService: MyserviceService) { }

  ngOnInit(): void {
    this.time = this.myserviceService.showTodayDate();
    this.name = this.myserviceService.name;
  }

}
