import { Component, OnInit } from '@angular/core';
import { Ipass } from 'src/app/module/passenger';
import { PassengerService } from 'src/app/services/passenger.service';

@Component({
  selector: 'app-pass-dash',
  templateUrl: './pass-dash.component.html',
  styleUrls: ['./pass-dash.component.scss']
})
export class PassDashComponent implements OnInit {
passengerArr: Array<Ipass> = [];
  totoalCount !: number;
  CheckInCount!: number;
  constructor(private _passengerService: PassengerService) { }

  ngOnInit(): void {this.passengerArr = this._passengerService.fetchallData();
    this.totoalCount = this.passengerArr.length;
    this.getCheckInCount();
  }

  getCheckInCount() {
    this.CheckInCount = this.passengerArr.filter((pass) => pass.checkin).length;
  }

  getEmitInfo(event: any) {
    this.getCheckInCount();
  }
}
  
