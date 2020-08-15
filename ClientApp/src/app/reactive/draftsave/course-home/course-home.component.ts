import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../model/course';
import { CourseService } from "../course.service";
import { shareReplay, filter, map, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.css']
})
export class CourseHomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {

    let courses$ = this.courseService.getCourses().pipe(
      shareReplay(),
      finalize(() => console.log("finalized"))
    );

    this.beginnerCourses$ = courses$.pipe(
      map(x => x.filter(c => c.category == "BEGINNER"))
    );

    this.advancedCourses$ = courses$.pipe(
      map(x => x.filter(c => c.category == "ADVANCED"))
    );


  }

}
