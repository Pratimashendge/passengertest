import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassCardComponent } from './pass-card/pass-card.component';
import { PassCountComponent } from './pass-count/pass-count.component';
import { PassDashComponent } from './pass-dash/pass-dash.component';
import { RemovecomponentComponent } from './removecomponent/removecomponent.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    PassDashComponent,
    PassCardComponent,
    PassCountComponent,
    RemovecomponentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports : [
    PassDashComponent
  ]
})
export class PassengerModule { }
