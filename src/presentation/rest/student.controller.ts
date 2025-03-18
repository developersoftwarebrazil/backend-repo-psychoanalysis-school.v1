// Importações necessárias para o controller
import { Controller, Post, Body } from '@nestjs/common';
import { EnrollStudentUseCase } from '../../use-cases/student/enroll-student.use-case';
import { EnrollStudentDTO } from '../../use-cases/dtos/enroll-student.dto';

@Controller('students') // Definindo o caminho base para os endpoints relacionados aos alunos
export class StudentController {
  // Injetando o caso de uso de matrícula no controlador
  constructor(
    private readonly enrollStudentUseCase: EnrollStudentUseCase, // Caso de uso que executa a matrícula
  ) {}

  // Endpoint para matricular um aluno no curso
  @Post('enroll') // Define que este método é acessado via POST
  async enrollStudent(@Body() enrollStudentDTO: EnrollStudentDTO) {
    // Extraímos os dados do DTO
    const { studentId, courseId } = enrollStudentDTO;

    // Chamamos o caso de uso de matrícula e retornamos o resultado (a matrícula criada)
    return await this.enrollStudentUseCase.execute(studentId, courseId);
  }
}
