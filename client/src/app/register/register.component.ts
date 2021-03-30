import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() usersFromHomeComponent: any;
  @Output() cancelRegisterForHomeComponent = new EventEmitter();
  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  register(): void{
    console.log(this.model);
  }

  cancel(): void{
    console.log('cancelled: ', this.model);
    this.cancelRegisterForHomeComponent.emit(false);
  }

}
