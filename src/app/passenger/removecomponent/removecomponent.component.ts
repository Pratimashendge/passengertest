import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-removecomponent',
  templateUrl: './removecomponent.component.html',
  styleUrls: ['./removecomponent.component.scss']
})
export class RemovecomponentComponent implements OnInit {

  constructor(private _matDialog: MatDialogRef<RemovecomponentComponent>) { }

  ngOnInit(): void {
  }
   onClose(flag: boolean) {
    this._matDialog.close(flag);
  }
}