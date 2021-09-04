import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "new-cmp",
        component: NewCmpComponent
      }
    ])
  ],

  providers: [MyserviceService],
  bootstrap: [AppComponent]

})

export class AppModule { }
