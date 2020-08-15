import { Component, OnInit, ContentChild, AfterViewInit, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-course-card1',
  templateUrl: './course-card1.component.html',
  styleUrls: ['./course-card1.component.css']
})
export class CourseCard1Component implements OnInit, AfterViewInit, AfterContentInit {

  @ContentChild('titleContent')
  content1;

  ngAfterContentInit(): void {
    console.info('content1: ', this.content1); // the earleast moment the content is filled
  }

  constructor() { }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  
  
}
