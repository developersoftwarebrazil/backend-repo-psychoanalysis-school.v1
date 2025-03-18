// Importação dos repositórios e entidades necessários para a matrícula
import { IStudentRepository } from '../../domain/repositories/student.repository';
import { ICourseRepository } from '../../domain/repositories/course.repository';
import { IEnrollmentRepository } from '../../domain/repositories/enrollment.repository';
import { Enrollment } from '../../domain/entities/enrollment.entity';

// Classe que contém a lógica para matricular um aluno
export class EnrollStudentUseCase {
  // Construtor que recebe os repositórios como dependências
  constructor(
    private studentRepository: IStudentRepository,
    private courseRepository: ICourseRepository,
    private enrollmentRepository: IEnrollmentRepository,
  ) {}

  // Método para matricular um aluno no curso
  async execute(studentId: string, courseId: string): Promise<Enrollment> {
    // 1. Buscar o aluno no repositório usando o ID fornecido
    const student = await this.studentRepository.findById(studentId);
    if (!student) {
      // Caso o aluno não seja encontrado, lança um erro
      throw new Error('Aluno não encontrado');
    }

    // 2. Buscar o curso no repositório usando o ID fornecido
    const course = await this.courseRepository.findById(courseId);
    if (!course) {
      // Caso o curso não seja encontrado, lança um erro
      throw new Error('Curso não encontrado');
    }

    // 3. Verificar se já existe uma matrícula para o aluno no curso
    const existingEnrollment =
      await this.enrollmentRepository.findByStudentIdAndCourseId(
        studentId,
        courseId,
      );
    if (existingEnrollment) {
      // Se já houver matrícula, lança um erro
      throw new Error('Aluno já está matriculado neste curso');
    }

    // 4. Criar a matrícula, associando aluno e curso
    const enrollment = new Enrollment(
      `${Date.now()}`, // Gerando um ID simples com base no timestamp (pode ser ajustado conforme necessário)
      student,
      course,
      new Date(), // Data atual da matrícula
      'active', // Status da matrícula (ativo por padrão)
    );

    // 5. Salvar a matrícula no banco de dados
    await this.enrollmentRepository.save(enrollment);

    // 6. Retornar a matrícula criada
    return enrollment;
  }
}
