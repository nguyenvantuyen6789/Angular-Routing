import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Angular-Routing';
  todaydate: any;
  name: any;

  constructor(private myserviceService: MyserviceService) {}

  ngOnInit() {
    this.todaydate = this.myserviceService.showTodayDate();
    console.log("Time: " + this.todaydate);

    console.log("Name before changed: " + this.name);
    
    this.myserviceService.name = "Tuyên Nguyễn 18";
    this.name = this.myserviceService.name;
    console.log("Name after changed: " + this.name);
  }
}
