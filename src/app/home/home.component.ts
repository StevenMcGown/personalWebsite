import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

visitors = "";
  constructor(private http: HttpClient) {    
    this.http.get('https://9evudan1v4.execute-api.us-east-1.amazonaws.com/Prod/hello/').subscribe(data =>{
      console.log(data);
      const visitors = JSON.stringify(data).split("\"");
      this.visitors = visitors[3];
    });
  }

  ngOnInit(): void {

  }
}
