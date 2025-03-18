import { Student } from '../entities/student.entity';

export interface IStudentRepository {
  save(student: Student): Promise<Student>;
  findById(id: string): Promise<Student | null>;
  findByEmail(email: string): Promise<Student | null>;
  findAll(): Promise<Student[]>;
}
