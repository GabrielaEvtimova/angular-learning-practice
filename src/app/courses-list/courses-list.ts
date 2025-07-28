import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../course-item/course-item';
import { Course } from '../model/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses-list',
  imports: [CourseItem],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css',
})
export class CoursesList implements OnInit {
  constructor(private courseService: CourseService) {}
  title: string = 'Available courses';
  courses: Course[] = [];
  wishlist: string[] = [];
  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    console.log('Courses list initialized!');
  }

  onCourseBooked(title: string): void {
    console.log(`Course ${title} is booked from the parent`);
  }

  onWishlist(title: string): void {
    const existIndex = this.wishlist.findIndex((wish) => wish === title);
    if (existIndex !== -1) {
      this.wishlist.splice(existIndex, 1);
    } else {
      this.wishlist.push(title);
    }
  }

  isInWishList(title: string): boolean {
    return this.wishlist.includes(title);
  }
}
