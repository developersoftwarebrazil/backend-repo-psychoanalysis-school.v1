export class CPF {
  // Propriedade privada e imutável para armazenar o CPF validado
  private readonly value: string;

  // Construtor que recebe um CPF como string e valida antes de armazenar
  constructor(cpf: string) {
    if (!this.validate(cpf)) {
      throw new Error('CPF inválido'); // Se o CPF for inválido, lança um erro
    }
    this.value = cpf; // Armazena o CPF validado
  }

  // Método privado para validar o CPF
  private validate(cpf: string): boolean {
    cpf = cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    // ^(\d)\1+$ → Verifica se todos os dígitos são iguais (exemplo: "111.111.111-11"), que não é um CPF válido

    // Função para calcular os dígitos verificadores
    const calcDigit = (factor: number) =>
      cpf
        .slice(0, factor - 1) // Pega os primeiros números do CPF
        .split('') // Converte para array
        .reduce((sum, num, index) => sum + Number(num) * (factor - index), 0);
    // Multiplica cada número pelo fator correspondente e soma tudo

    // Cálculo do primeiro dígito verificador
    const digit1 = ((calcDigit(10) * 10) % 11) % 10;

    // Cálculo do segundo dígito verificador
    const digit2 = ((calcDigit(11) * 10) % 11) % 10;

    // Retorna true se os dígitos verificadores calculados forem iguais aos fornecidos no CPF
    return digit1 === Number(cpf[9]) && digit2 === Number(cpf[10]);
  }

  // Método público para acessar o CPF armazenado
  getValue(): string {
    return this.value;
  }
}
