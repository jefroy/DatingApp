import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'JJ Dating App';
  users: any; // todo change this to specify type

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.http.get('https://localhost:5001/api/users').subscribe(
      response => {
        this.users = response;
      }, error => {
        console.log(error);
      }
    );
  }


}
