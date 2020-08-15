import { Component, OnInit } from '@angular/core';
import { interval, merge, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mergehome',
  templateUrl: './mergehome.component.html',
  styleUrls: ['./mergehome.component.css']
})
export class MergehomeComponent implements OnInit {
  sub: Subscription;

  constructor() { }

  ngOnInit(): void {
    const series1$ = interval(1000).pipe(map(val => val * 10));

    const series2$ = interval(1000).pipe(map(val => val * 100));

    const result$ = merge(series1$, series2$);

    this.sub = result$.subscribe(console.log);
  }

  code = `
  const series1$ = interval(1000).pipe(map(val => val * 10));

  const series2$ = interval(1000).pipe(map(val => val * 100));

  const result$ = merge(series1$, series2$);

  result$.subscribe(console.log);
  `;

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
