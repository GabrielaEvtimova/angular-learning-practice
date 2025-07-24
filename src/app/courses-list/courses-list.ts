import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../course-item/course-item';

@Component({
  selector: 'app-courses-list',
  imports: [CourseItem],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css',
})
export class CoursesList implements OnInit {
  title: string = 'Available courses';
  courses = [
    {
      id: 1,
      title: 'Angular Introduction',
      description:
        'Learn the basics of Angular, including components, templates, and services.',
      price: '199',
      startDate: '2025-07-01',
      category: 'Beginner',
      duration: '1 month',
      soldOut: true,
      onSale: true,
      image:
        'https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg',
    },
    {
      id: 2,
      title: 'Advanced Angular Concepts',
      description:
        'Deep dive into advanced Angular topics like RxJS, NgRx, and performance optimization.',
      price: '299',
      startDate: '2025-08-01',
      category: 'Advanced',
      duration: '2 months',
      soldOut: false,
      onSale: true,
      image:
        'https://media.istockphoto.com/id/1409346804/vector/human-brain-health-knowledge-and-tiny-people-work-on-ideas-and-solving-business-problems.jpg?s=612x612&w=0&k=20&c=Y5WHIgRlA7kZHDDZfJwXHjb5DTPNekMXZ1TD4nxZHNw=',
    },
    {
      id: 3,
      title: 'Full Angular Bootcamp',
      description:
        'A comprehensive 3-month program covering Angular from basics to advanced topics.',
      price: '499',
      startDate: '2025-08-15',
      category: 'All Levels',
      duration: '3 months',
      soldOut: false,
      onSale: true,
      image:
        'https://img.freepik.com/free-vector/female-student-listening-webinar-online_74855-6461.jpg?semt=ais_hybrid&w=740',
    },
    {
      id: 4,
      title: 'Angular Testing & Debugging',
      description:
        'Master unit testing, end-to-end testing, and debugging techniques in Angular.',
      price: '249',
      startDate: '2025-09-01',
      category: 'Intermediate',
      duration: '1 month',
      soldOut: false,
      onSale: false,
      image:
        'https://img.freepik.com/premium-vector/online-courses-concept_23-2148524391.jpg',
    },
    {
      id: 5,
      title: 'Angular + Firebase Integration',
      description:
        'Build dynamic web apps using Angular with Firebase authentication and real-time database.',
      price: '279',
      startDate: '2025-10-01',
      category: 'Intermediate',
      duration: '2 months',
      soldOut: false,
      onSale: false,
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/012/982/073/small_2x/business-training-or-courses-concept-can-use-for-web-banner-infographics-hero-images-isometric-modern-illustration-vector.jpg',
    },
    {
      id: 6,
      title: 'Angular for Web Professionals',
      description:
        'Tailored for working developers looking to enhance their web app skills using Angular.',
      price: '399',
      startDate: '2025-11-15',
      category: 'Advanced',
      duration: '3 months',
      soldOut: false,
      onSale: false,
      image:
        'https://media.istockphoto.com/id/959212324/vector/finding-new-ideas-problem-solving-vector-illustration-banner-teamwork-search-for-solutions.jpg?s=612x612&w=0&k=20&c=YBSs-0KYUazllZPV_NQcot_5F25OU2TgQlK0tQ_D7Uo=',
    },
  ];
  onCourseClicked(title: string): void {
    alert(`You clicked: ${title}`);
  }
  ngOnInit(): void {
    console.log('Courses list initialized!')
  }
}
