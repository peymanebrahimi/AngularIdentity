import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Course } from "../model/course";
import { Observable } from 'rxjs';
import { Lesson } from '../model/lesson';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url = `${environment.apiUrl}/courses`;

  constructor(private http: HttpClient) { }


  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.url}/${id}`);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.url}/${course.id}`, course);
  }

  getLessonsOfCourse(courseId: number, search: string) {
    return this.http.get<Lesson[]>(`${this.url}/GetLessonsOfCourse/${courseId}/${search}`)
  }
}
