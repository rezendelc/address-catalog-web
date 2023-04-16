export class Endereco{
  id: number;
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;

  constructor(endereco: Endereco) {
    this.id = endereco.id;
    this.rua = endereco.rua;
    this.numero = endereco.numero;
    this.bairro = endereco.bairro;
    this.cidade = endereco.cidade;
    this.uf = endereco.uf;
    this.cep = endereco.cep;
  }
}