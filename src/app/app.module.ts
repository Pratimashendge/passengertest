import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PassCountComponent } from './passenger/pass-count/pass-count.component';
import { PassDashComponent } from './passenger/pass-dash/pass-dash.component';
import { PassCardComponent } from './passenger/pass-card/pass-card.component';
import { RemovecomponentComponent } from './passenger/removecomponent/removecomponent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PassCountComponent,
    PassDashComponent,
    PassCardComponent,
    RemovecomponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
