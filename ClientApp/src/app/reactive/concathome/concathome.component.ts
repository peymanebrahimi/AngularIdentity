import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, concat, Subscription } from 'rxjs';

@Component({
  selector: 'app-concathome',
  templateUrl: './concathome.component.html',
  styleUrls: ['./concathome.component.css']
})
export class ConcathomeComponent implements OnInit, OnDestroy {
  sub: Subscription;

  constructor() { }


  ngOnInit(): void {
    const series1$ = of('a', 'b');

    const series2$ = of('x', 'y');

    const result$ = concat(series1$, series2$);

    this.sub = result$.subscribe(console.log);
  }


  code = `
  const series1$ = of('a', 'b');

  const series2$ = of('x', 'y');

  const result$ = concat(series1$, series2$);

  result$.subscribe(console.log);  
  `;

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
