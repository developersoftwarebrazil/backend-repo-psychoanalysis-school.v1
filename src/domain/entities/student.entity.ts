import { Email } from '../value-objects/email.vo';
import { CPF } from '../value-objects/cpf.vo';
export class Student {
  constructor(
    public readonly id: string,
    public name: string,
    public email: Email,
    public cpf: CPF,
    public createdAt: Date = new Date(),
  ) {}

  updateName(name: string) {
    this.name = name;
  }
}
