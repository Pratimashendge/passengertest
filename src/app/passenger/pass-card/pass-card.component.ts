import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ipass } from 'src/app/module/passenger';
import { PassengerService } from 'src/app/services/passenger.service';
import { RemovecomponentComponent } from '../removecomponent/removecomponent.component';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
 @Input() passObj!: Ipass;

  isHide: boolean = false;

  @ViewChild('passName') passName!: ElementRef;

  @Output() emitpassInfo: EventEmitter<Ipass> = new EventEmitter<Ipass>();
  constructor(
     private _passangerService: PassengerService,
    private _matdialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  onRemove(removeId: string) {
    let matDialogRef = this._matdialog.open(RemovecomponentComponent);
    matDialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this._passangerService.onRemove(removeId);
        this.emitpassInfo.emit(this.passObj);
      }
    });
  }

  onPassUpdate() {
    let updatedpassName = this.passName.nativeElement.value;
    this._passangerService.updatedpassName(this.passObj.id, updatedpassName);
  }
}
