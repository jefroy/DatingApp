import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any; // class var

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getValues();
  }

  // tslint:disable-next-line: typedef
  getValues(){
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    },
    // tslint:disable-next-line: no-shadowed-variable
    error => {
      console.log(error);
    });
  }

}
