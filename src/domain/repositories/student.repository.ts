import { Student } from "../entities/student.entity";
export interface StudentRepository {
  findById(id: string): Promise<Student | null>;
  findByEmail(email: string): Promise<Student | null>;
  create(student: Student): Promise<void>;
}
