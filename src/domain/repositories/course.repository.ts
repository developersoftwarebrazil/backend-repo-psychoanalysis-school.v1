import { Course } from '../entities/course.entity';

export interface ICourseRepository {
  save(course: Course): Promise<Course>;
  findById(id: string): Promise<Course | null>;
  findAll(): Promise<Course[]>;
}
