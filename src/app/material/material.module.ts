import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';

const modules = [
  MatButtonModule,
  MatCardModule,
  MatSnackBarModule,
  MatDividerModule,
  MatDialogModule,
];


@NgModule({
    declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule{

}