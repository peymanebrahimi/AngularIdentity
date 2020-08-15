import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from "../../model/course";
import { Lesson } from "../../model/lesson";
import {
  debounceTime, distinctUntilChanged, startWith, tap,
  delay, map, concatMap, switchMap, withLatestFrom, concatAll, shareReplay
} from 'rxjs/operators';
import { merge, fromEvent, Observable, concat, from } from 'rxjs';
import { CourseService } from '../course.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit {

  courseId: number;

  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;

  @ViewChild('searchInput')
  input: ElementRef;

  constructor(private route: ActivatedRoute,
    private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['id'];
    this.course$ = this.courseService.getCourse(this.courseId);

  }

  ngAfterViewInit(): void {
    /*
    let searchLesson$ = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(search => this.courseService.getLessonsOfCourse(this.courseId, search))
      );

    let initialLesson$ = this.courseService.getLessonsOfCourse(this.courseId, '');

    this.lessons$ = concat(initialLesson$, searchLesson$);
    */
    this.lessons$ = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        startWith(''),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(search => this.courseService.getLessonsOfCourse(this.courseId, search))
      );

  }

}
