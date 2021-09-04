import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  name = "Tuyên Nguyễn";
  constructor() { }

  showTodayDate() {
    let nDate = new Date();
    return nDate;
  }
}
