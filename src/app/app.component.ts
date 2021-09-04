import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Angular-Routing';
  todaydate: any;
  name: any;

  formdata: any;

  constructor(private myserviceService: MyserviceService) {}

  ngOnInit() {
    this.todaydate = this.myserviceService.showTodayDate();
    console.log("Time: " + this.todaydate);

    console.log("Name before changed: " + this.name);
    
    this.myserviceService.name = "Tuyên Nguyễn 18";
    this.name = this.myserviceService.name;
    console.log("Name after changed: " + this.name);

    this.formdata = new FormGroup({
      emailid: new FormControl(
        "jaynguyengee6789@gmail.com",
        
        Validators.compose([
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ])
      ),
      psswd: new FormControl(
        "123456789"
      )
    });
  }

  passwordvalidation(formcontrol: any) {
    if (formcontrol.value.length >= 6) {
      return {"passwd" : true};
    } else {
      return {"passwd" : false};
    }
  }

  onClickSubmit(data: any) {
    console.log("Email id: " + data.emailid);
    console.log("Password: " + data.psswd);
 }

}
