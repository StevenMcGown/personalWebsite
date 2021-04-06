import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Post 1', cols: 2, rows: 1 },
          { title: 'Post 2', cols: 2, rows: 1 },
          { title: 'Post 3', cols: 2, rows: 1 },
          { title: 'Post 4', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'Post 1', cols: 2, rows: 1 },
        { title: 'Post 2', cols: 2, rows: 1 },
        { title: 'Post 3', cols: 2, rows: 1 },
        { title: 'Post 4', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
