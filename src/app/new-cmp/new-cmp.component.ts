import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html'
})
export class NewCmpComponent implements OnInit {

  name = "Hi there!";

  constructor() { }

  ngOnInit(): void {
  }

}
