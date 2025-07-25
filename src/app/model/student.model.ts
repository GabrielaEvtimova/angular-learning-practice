export interface Student {
  id: number;
  name: string;
  email?: string;
  enrolledCoursesIds?: number[];
  phoneNumber?: string;
  registrationDate?: string;
}
