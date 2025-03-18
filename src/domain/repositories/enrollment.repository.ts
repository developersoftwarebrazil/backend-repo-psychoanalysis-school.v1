import { Enrollment } from '../entities/enrollment.entity';

export interface IEnrollmentRepository {
  save(enrollment: Enrollment): Promise<Enrollment>;
  findByStudentIdAndCourseId(
    studentId: string,
    courseId: string,
  ): Promise<Enrollment | null>;
  findAllByStudentId(studentId: string): Promise<Enrollment[]>;
  findAllByCourseId(courseId: string): Promise<Enrollment[]>;
}
