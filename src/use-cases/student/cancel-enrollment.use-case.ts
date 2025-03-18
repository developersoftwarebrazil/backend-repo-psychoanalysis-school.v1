import { Injectable } from '@nestjs/common';
import { IEnrollmentRepository } from '../../domain/repositories/enrollment.repository';
import { Enrollment } from '../../domain/entities/enrollment.entity';

@Injectable()
export class CancelEnrollmentUseCase {
  constructor(private readonly enrollmentRepository: IEnrollmentRepository) {}

  // Método para cancelar a matrícula de um aluno em um curso
  async execute(enrollmentId: string): Promise<Enrollment> {
    // Buscar a matrícula pelo ID
    const enrollment = await this.enrollmentRepository.findById(enrollmentId);
    if (!enrollment) {
      throw new Error('Matrícula não encontrada');
    }

    // Cancelar a matrícula
    enrollment.cancelEnrollment();

    // Salvar a matrícula cancelada no repositório
    return this.enrollmentRepository.save(enrollment);
  }
}
