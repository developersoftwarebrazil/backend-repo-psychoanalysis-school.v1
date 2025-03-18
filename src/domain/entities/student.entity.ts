export class Student {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public cpf: string,
    public createdAt: Date = new Date()
  ) {}

  static create(name: string, email: string, cpf: string): Student {
    return new Student(crypto.randomUUID(), name, email, cpf);
  }
}
