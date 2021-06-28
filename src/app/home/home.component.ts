import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
var Count = 123;
function getCount(){
  var response = fetch('https://9evudan1v4.execute-api.us-east-1.amazonaws.com/Prod/hello/');
  return response;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { imageName: "./assets/piano.jpg", title: 'Music', cols: 2, rows: 1 },
          { title: 'Art Gallery', cols: 2, rows: 1 },
          { title: 'Stuff I\'m reading', cols: 2, rows: 1 },
          { title: 'My Blog', cols: 2, rows: 1 },
          { title: 'My Resume', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'Music', cols: 2, rows: 1 },
        { title: 'Art Gallery', cols: 1, rows: 1 },
        { title: 'Stuff I\'m reading', cols: 1, rows: 1 },
        { title: 'My Blog', cols: 1, rows: 1 },
        { title: 'My Resume', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
