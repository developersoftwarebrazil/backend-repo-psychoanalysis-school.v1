// DTO que define os dados necessários para matricular um aluno
export class EnrollStudentDTO {
  studentId: string; // ID do aluno a ser matriculado
  courseId: string; // ID do curso em que o aluno será matriculado

  // Construtor para facilitar a criação do DTO
  constructor(studentId: string, courseId: string) {
    this.studentId = studentId;
    this.courseId = courseId;
  }
}
