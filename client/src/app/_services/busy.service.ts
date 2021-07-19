import { Injectable } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0; // increment each time we do a request

  constructor(private spinnerService: NgxSpinnerService) { }

  busy(): any{
    this.busyRequestCount++;
    this.spinnerService.show(undefined, {
      type: 'ball-newton-cradle', // choose from spinner docs
      bdColor: 'rgba(255,255,255,0)',
      color: '#333333'
    });
  }

  idle(): any{
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0){ // number of requests can get messy, keep track here for safety
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }

}
