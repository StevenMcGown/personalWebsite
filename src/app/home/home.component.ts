import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  visits = 0;

  constructor(private http: HttpClient) {    
    this.http.get('https://9evudan1v4.execute-api.us-east-1.amazonaws.com/Prod/hello/').subscribe(data =>{
      console.log(data);
      this.visits = data['Visitors'];
    });
  }

  ngOnInit(): void {

  }
}
