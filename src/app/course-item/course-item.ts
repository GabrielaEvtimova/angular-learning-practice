import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-item',
  imports: [CommonModule, DatePipe, CurrencyPipe],
  templateUrl: './course-item.html',
  styleUrl: './course-item.css',
})
export class CourseItem {
  @Input() title!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() startDate?: string;
  @Input() category?: string;
  @Input() duration?: string;
  @Input() bookCourseButton!: string;
  @Input() soldOut?: boolean;
  @Input() image?: string;
  @Input() onSale?: boolean;
  @Input() wishlistButton!: string
  @Input() isWishlisted!: boolean

  @Output() courseBooked = new EventEmitter<any>()
  @Output() wishlist = new EventEmitter<any>()

  onCourseBooked(): void {
    this.courseBooked.emit(this.title)
  }
  onWishlist(): void {
    this.wishlist.emit(this.title)
  }
}
