import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CourseCard1Component } from '../course-card1/course-card1.component';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css']
})
export class NgContentComponent implements OnInit, AfterViewInit {

  @ViewChild('card1')
  card1: CourseCard1Component;

  @ViewChild('card1', { read: ElementRef })
  card2: ElementRef;

  @ViewChildren(CourseCard1Component)
  cards: QueryList<CourseCard1Component>;

  @ViewChildren(CourseCard1Component, { read: ElementRef })
  cards2: QueryList<CourseCard1Component>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // console.info(`Card1: `, this.card1);
    // console.info(`Card2: `, this.card2);
    // console.info(`Cards: `, this.cards);
    // console.info(`Cards2: `, this.cards2); 
  }

  code = `
  <mat-card-title>
      <ng-content select=".title" ></ng-content>
  </mat-card-title>
  `;

  code2 = `
  <app-course-card1 #card1>
    <p class="title" #titleContent>This is the title</p>
    <div class="subTitle">
        <p>as subtitle</p>
    </div>
  </app-course-card1>
  `;

  java_code = `
  public class Example {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
  }
 `;

}
