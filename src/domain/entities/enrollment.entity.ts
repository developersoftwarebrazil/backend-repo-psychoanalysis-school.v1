import { Student } from './student.entity';
import { Course } from './course.entity';

export class Enrollment {
  constructor(
    public readonly id: string,
    public student: Student,
    public course: Course,
    public enrollmentDate: Date = new Date(),
    public status: 'active' | 'inactive' = 'active',
  ) {}

  cancelEnrollment() {
    this.status = 'inactive';
  }

  activateEnrollment() {
    this.status = 'active';
  }
}
