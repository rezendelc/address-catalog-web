import { Endereco } from './endereco';

export class Imovel {
  id: number;
  nome: string;
  tipo: string[];
  valor: number;
  condominio: number;
  quartos: number;
  banheiros: number;
  mobiliado: boolean;
  area: number;
  venda: boolean;
  aluguel: boolean;
  dataAnuncio: Date;
  endereco: Endereco[];
  proprietarioId: number;

  constructor(imovel: Imovel) {
    this.id = imovel.id;
    this.nome = imovel.nome;
    this.tipo = imovel.tipo;
    this.valor = imovel.valor;
    this.condominio = imovel.condominio;
    this.quartos = imovel.quartos;
    this.banheiros = imovel.banheiros;
    this.mobiliado = imovel.mobiliado;
    this.area = imovel.area;
    this.venda = imovel.venda;
    this.aluguel = imovel.aluguel;
    this.dataAnuncio = imovel.dataAnuncio;
    this.endereco = imovel.endereco;
    this.proprietarioId = imovel.proprietarioId;
  }
}