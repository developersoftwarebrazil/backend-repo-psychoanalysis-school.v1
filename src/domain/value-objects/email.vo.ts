export class Email {
  // Propriedade privada e imutável que armazena o e-mail validado
  private readonly value: string;

  // O construtor recebe um e-mail e valida antes de armazená-lo
  constructor(email: string) {
    if (!this.validate(email)) {
      throw new Error('E-mail inválido'); // Se o e-mail for inválido, lança um erro
    }
    this.value = email; // Armazena o e-mail validado
  }

  // Método privado para validar o formato do e-mail usando uma expressão regular (Regex)
  private validate(email: string): boolean {
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email); // Retorna true se o e-mail for válido, false caso contrário
  }

  // Método público para acessar o e-mail armazenado
  getValue(): string {
    return this.value;
  }
}
