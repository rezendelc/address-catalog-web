export class Proprietario {
  id: number;
  nome: string;
  imovelId: number;

  constructor(proprietario: Proprietario) {
    this.id = proprietario.id;
    this.nome = proprietario.nome;
    this.imovelId = proprietario.imovelId;
  }
}