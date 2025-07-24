import { CommonModule, CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
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
  @Input() price!: string;
  @Input() startDate!: string;
  @Input() category!: string;
  @Input() duration!: string;
  @Input() buttonTitle!: string;
  @Input() soldOut!: boolean;
  @Input() image!: string;
  @Input() onSale!: boolean;
  @Output() courseClicked = new EventEmitter<string>();

  handleClick(): void {
    this.courseClicked.emit(this.title);
  }
}
